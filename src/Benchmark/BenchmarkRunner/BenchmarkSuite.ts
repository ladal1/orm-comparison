import { AssertionError } from 'assert'
import Database from 'Benchmark/interfaces/DatabaseUtils'
import { omit, sum } from 'lodash'
import { Skipped } from '.'
import { BaseSerializer } from 'Benchmark/ResultSerializers/BaseSerializer'

type TestOptions = {
  testName: string
  referenceCheck: (data?: any) => Promise<void>
} & ThroughputTest &
  TestLatency

interface ThroughputTest {
  testThroughput: true
  throughputIterations: number
}

interface TestLatency {
  testLatency: true
}

export interface TestTemplate {
  [key: symbol | string | number]: () => Promise<any>
}

export enum TestResult {
  PASS = 'PASS',
  FAIL = 'FAIL',
  ERROR = 'ERROR',
  SKIPPED = 'SKIPPED',
}

export interface TestValidationResult {
  result: TestResult
  time?: number
  error?: Error
  runtimes?: number[]
}

export class BenchmarkSuite<T extends TestTemplate> {
  tests: Record<string, Omit<TestOptions, 'testName'>> = {}
  constructor(
    private readonly name: string,
    public readonly database: Database,
    tests: TestOptions[] = []
  ) {
    this.addTests(tests)
  }

  public getName(): string {
    return this.name
  }

  public addTest(TestOptions: TestOptions) {
    this.tests[TestOptions.testName] = omit(TestOptions, 'testName')
  }

  public addTests(tests: TestOptions[]) {
    tests.forEach(test => this.addTest(test))
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
      if (e instanceof AssertionError) {
        return { result: TestResult.FAIL, error: e }
      }
      if (e instanceof Skipped) {
        return { result: TestResult.SKIPPED }
      }
      return { result: TestResult.ERROR, error: e }
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
        if (e instanceof AssertionError) {
          return { result: TestResult.FAIL, error: e }
        }
      }
    }
    for (let i = 0; i < iterations; i++) {
      try {
        const startTime = performance.now()
        await implementationFn()
        runtimes.push(performance.now() - startTime)
      } catch (e) {
        if (e instanceof Skipped) {
          return { result: TestResult.SKIPPED }
        }
        return { result: TestResult.ERROR, error: e }
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
      if (!test.testLatency || !implementation?.[testName]) {
        continue
      }
      const result = await this.runLatencyImplementation(
        implementation[testName],
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
      if (!test.testThroughput || !implementation?.[testName]) {
        continue
      }
      const result = await this.runThroughputImplementation(
        implementation[testName],
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
