import { AssertionError } from 'assert'
import Database from 'BenchmarkUtils/interfaces/DatabaseUtils'
import { sum } from 'lodash'
import { Skipped } from '.'
import { BaseSerializer } from 'BenchmarkUtils/ResultSerializers/BaseSerializer'

type TestOptions = {
  testName: string
  call: (implementation: ImplementationFn) => () => Promise<any>
  referenceCheck: (data?: any) => Promise<void>
} & (ThroughputTest | TestLatency)

interface ThroughputTest {
  testThroughput: true
  throughputIterations: number
}

interface TestLatency {
  testLatency: true
}

type ImplementationFn = (...args: any[]) => Promise<any>
export interface TestTemplate {
  [key: symbol | string | number]: ImplementationFn
}

export enum TestResult {
  PASS = 'PASS',
  FAIL = 'FAIL',
  ERROR = 'ERROR',
  SKIPPED = 'SKIPPED',
}

export interface TestValidationResult {
  result: TestResult
  testType?: 'Latency' | 'Throughput'
  time?: number
  error?: Error
  runtimes?: number[]
}

export class BenchmarkSuite<T extends TestTemplate> {
  tests: Record<string | symbol | number, TestOptions> = {}
  constructor(
    private readonly name: string,
    public readonly database: Database,
    tests: Partial<{ [k in keyof T]: TestOptions }> = {}
  ) {
    this.addTests(tests)
  }

  public getName(): string {
    return this.name
  }

  public addTest(testId: keyof T, TestOptions: TestOptions) {
    this.tests[testId] = TestOptions
  }

  public addTests(tests: Partial<{ [k in keyof T]: TestOptions }>) {
    for (const [testId, test] of Object.entries(tests)) {
      if (test === undefined) continue
      this.addTest(testId, test)
    }
  }

  private errorHandler(
    error: Error,
    testType: TestValidationResult['testType']
  ): TestValidationResult {
    if (error instanceof AssertionError) {
      return { result: TestResult.FAIL, error, testType }
    }
    if (error instanceof Skipped) {
      return { result: TestResult.SKIPPED, testType }
    }
    if (error instanceof Error) {
      return { result: TestResult.ERROR, error, testType }
    }
    return { result: TestResult.ERROR, testType }
  }

  public async runLatencyImplementation(
    implementationFn: () => Promise<any>,
    validationFn: (data?: any) => Promise<void>
  ): Promise<TestValidationResult> {
    try {
      const startTime = performance.now()
      const data = await implementationFn()
      const finishTime = performance.now()
      await validationFn(data)
      return { result: TestResult.PASS, time: finishTime - startTime }
    } catch (e) {
      return this.errorHandler(e, 'Latency')
    }
  }

  public async runThroughputImplementation(
    implementationFn: () => Promise<any>,
    validationFn: (data?: any) => Promise<void>,
    iterations: number
  ): Promise<TestValidationResult> {
    const runtimes = []
    // Check that the implementation is valid before running the iterations
    for (let i = 0; i < 10; i++) {
      try {
        const data = await implementationFn()
        await validationFn(data)
      } catch (e) {
        return this.errorHandler(e, 'Throughput')
      }
    }
    for (let i = 0; i < iterations; i++) {
      try {
        const startTime = performance.now()
        await implementationFn()
        runtimes.push(performance.now() - startTime)
      } catch (e) {
        return this.errorHandler(e, 'Throughput')
      }
    }
    return { result: TestResult.PASS, time: sum(runtimes), runtimes }
  }

  public async runTestLatency(
    implementation: T,
    implementationName: string,
    reporters: BaseSerializer[]
  ) {
    for (const [testName, test] of Object.entries(this.tests)) {
      if (!('testLatency' in test) || !implementation?.[testName]) {
        continue
      }
      const result = await this.runLatencyImplementation(
        test.call(implementation[testName]),
        test.referenceCheck
      )
      for (const reporter of reporters) {
        reporter.serializeTest(
          this.database.name,
          testName,
          implementationName,
          'Latency',
          result
        )
      }
    }
  }

  public async runTestThroughput(
    implementation: T,
    implementationName: string,
    reporters: BaseSerializer[]
  ) {
    for (const [testName, test] of Object.entries(this.tests)) {
      if (!('testThroughput' in test) || !implementation?.[testName]) {
        continue
      }
      const result = await this.runThroughputImplementation(
        test.call(implementation[testName]),
        test.referenceCheck,
        test.throughputIterations
      )
      for (const reporter of reporters) {
        reporter.serializeTest(
          this.database.name,
          testName,
          implementationName,
          'Throughput',
          result
        )
      }
    }
  }

  public async runSuite(
    implementation: T,
    implementationName: string,
    reporters: BaseSerializer[]
  ) {
    await this.runTestLatency(implementation, implementationName, reporters)
    for (const reporter of reporters) {
      reporter.separateTestType()
    }
    await this.runTestThroughput(implementation, implementationName, reporters)
  }
}
