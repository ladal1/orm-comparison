import { AssertionError } from 'assert'
import Database from 'Benchmark/interfaces/DatabaseUtils'
import { omit } from 'lodash'
import { Skipped } from '.'
import { TestResultSerializer } from 'Benchmark/ResultSerializers/BaseSerializer'

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
}

export class BenchmarkSuite<T extends TestTemplate> {
  tests: Record<string, Omit<TestOptions, 'testName'>> = {}
  constructor(
    private readonly name: string,
    public readonly database: Database
  ) {}

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
    implementationFn: (data?: any) => Promise<any>,
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

  public async runTestLatency(
    implementation: T,
    implementationName: string,
    reporters: TestResultSerializer[]
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
        reporter(
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
    reporters: TestResultSerializer[]
  ) {
    throw new Error('Not implemented')
  }

  public async runSuite(
    implementation: T,
    implementationName: string,
    reporters: TestResultSerializer[]
  ) {
    await this.runTestLatency(implementation, implementationName, reporters)
    // await this.runTestThroughput(implementation, implementationName, reporters)
  }
}
