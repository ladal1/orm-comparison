import { AssertionError } from 'assert'
import Database from 'BenchmarkUtils/interfaces/DatabaseUtils'
import { sum } from 'lodash'
import { NotSupported, Skipped } from '.'
import { BaseSerializer } from 'BenchmarkUtils/ResultSerializers/BaseSerializer'
import { Client } from 'pg'

export enum TestType {
  LATENCY = 'Latency',
  VALIDITY = 'Validity',
}

type TestOptions = {
  testName: string
  call: (implementation: ImplementationFn) => () => Promise<any>
  reset?: (pg: Client) => Promise<void>
  referenceCheck: (data?: any) => Promise<void>
} & LatencyTest &
  TestValidity

type LatencyTest =
  | {
      testLatency: true
      latencyIterations: number
    }
  | {
      testLatency?: false
    }

interface TestValidity {
  testValidity?: boolean
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
  NOT_SUPPORTED = 'NOT_SUPPORTED',
  NOT_IMPLEMENTED = 'NOT_IMPLEMENTED',
}

export interface TestValidationResult {
  result: TestResult
  testType?: TestType
  time?: number
  error?: Error
  runtimes?: number[]
}

export class BenchmarkSuite<T extends TestTemplate> {
  tests: Record<string | symbol | number, TestOptions> = {}
  _hasValidityTests = false
  _hasLatencyTests = false
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
    if (TestOptions.testLatency) this._hasLatencyTests = true
    if (TestOptions.testValidity) this._hasValidityTests = true
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
    if (error instanceof NotSupported) {
      return { result: TestResult.NOT_SUPPORTED, testType }
    }
    if (error instanceof Error) {
      return { result: TestResult.ERROR, error, testType }
    }
    return { result: TestResult.ERROR, testType }
  }

  public async runValidityImplementation(
    implementationFn: () => Promise<any>,
    validationFn: (data?: any) => Promise<void>,
    resetFn: () => Promise<void>
  ): Promise<TestValidationResult> {
    try {
      const startTime = performance.now()
      const data = await implementationFn()
      const finishTime = performance.now()
      await validationFn(data)
      await resetFn()
      return { result: TestResult.PASS, time: finishTime - startTime }
    } catch (e) {
      return this.errorHandler(e, TestType.VALIDITY)
    }
  }

  public async runLatencyImplementation(
    implementationFn: () => Promise<any>,
    validationFn: (data?: any) => Promise<void>,
    resetFn: () => Promise<void>,
    iterations: number
  ): Promise<TestValidationResult> {
    const runtimes = []
    // Check that the implementation is valid before running the iterations
    for (let i = 0; i < 10; i++) {
      try {
        const data = await implementationFn()
        await validationFn(data)
      } catch (e) {
        return this.errorHandler(e, TestType.LATENCY)
      }
    }
    for (let i = 0; i < iterations; i++) {
      try {
        const startTime = performance.now()
        await implementationFn()
        runtimes.push(performance.now() - startTime)
        await resetFn()
      } catch (e) {
        return this.errorHandler(e, TestType.LATENCY)
      }
    }
    return { result: TestResult.PASS, time: sum(runtimes), runtimes }
  }

  public async runTestValidity(
    implementation: T,
    implementationName: string,
    reporters: BaseSerializer[],
    utilityConnection: Client
  ) {
    for (const [testName, test] of Object.entries(this.tests)) {
      if (!('testValidity' in test)) {
        continue
      }
      if (!implementation?.[testName]) {
        for (const reporter of reporters) {
          reporter.serializeTest(
            this.database.name,
            this.name,
            testName,
            implementationName,
            TestType.VALIDITY,
            { result: TestResult.NOT_IMPLEMENTED }
          )
        }
        continue
      }
      const result = await this.runValidityImplementation(
        test.call(implementation[testName]),
        test.referenceCheck,
        () => {
          if (test.reset) {
            return test.reset(utilityConnection)
          }
          return Promise.resolve()
        }
      )
      for (const reporter of reporters) {
        reporter.serializeTest(
          this.database.name,
          this.name,
          testName,
          implementationName,
          TestType.VALIDITY,
          result
        )
      }
    }
  }

  public async runTestLatency(
    implementation: T,
    implementationName: string,
    reporters: BaseSerializer[],
    utilityConnection: Client
  ) {
    for (const [testName, test] of Object.entries(this.tests)) {
      if (!('testLatency' in test) || !('latencyIterations' in test)) {
        continue
      }
      if (!implementation?.[testName]) {
        for (const reporter of reporters) {
          reporter.serializeTest(
            this.database.name,
            this.name,
            testName,
            implementationName,
            TestType.LATENCY,
            { result: TestResult.NOT_IMPLEMENTED }
          )
        }
        continue
      }
      const result = await this.runLatencyImplementation(
        test.call(implementation[testName]),
        test.referenceCheck,
        () => {
          if (test.reset) {
            return test.reset(utilityConnection)
          }
          return Promise.resolve()
        },
        test.latencyIterations
      )
      for (const reporter of reporters) {
        reporter.serializeTest(
          this.database.name,
          this.name,
          testName,
          implementationName,
          TestType.LATENCY,
          result
        )
      }
    }
  }

  public async runSuite(
    implementation: T,
    implementationName: string,
    reporters: BaseSerializer[],
    utilityConnection: Client
  ) {
    for (const reporter of reporters) {
      reporter.serializeSuite(
        this.database.name,
        this.getName(),
        implementationName
      )
    }
    if (this._hasValidityTests) {
      for (const reporter of reporters) {
        reporter.startTestType(TestType.VALIDITY)
      }
      await this.runTestValidity(
        implementation,
        implementationName,
        reporters,
        utilityConnection
      )
      for (const reporter of reporters) {
        reporter.closeTestType()
      }
    }
    if (this._hasLatencyTests) {
      for (const reporter of reporters) {
        reporter.startTestType(TestType.LATENCY)
      }
      await this.runTestLatency(
        implementation,
        implementationName,
        reporters,
        utilityConnection
      )
      for (const reporter of reporters) {
        reporter.closeTestType()
      }
    }
    for (const reporter of reporters) {
      reporter.closeSuite()
    }
  }
}
