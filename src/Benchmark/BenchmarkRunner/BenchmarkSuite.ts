import { AssertionError } from 'assert'
import Database from 'Benchmark/interfaces/DatabaseUtils'
import { clearLine } from 'Benchmark/utils/clearLine'
import chalk from 'chalk'
import { omit } from 'lodash'
import { Client } from 'pg'

interface TestOptions {
  testName: string
  testLatency?: boolean
  testThroughput?: boolean
  referenceCheck: (data?: any) => Promise<void>
}

export interface TestTemplate {
  [key: symbol | string | number]: () => Promise<any>
}

enum TestResult {
  PASS = 'PASS',
  FAIL = 'FAIL',
  ERROR = 'ERROR',
  SKIPPED = 'SKIPPED',
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

  public async prepare(client: Client) {
    await this.database.setupDatabase(client)
    await this.database.seedDatabase(client)
  }

  public async teardown(client: Client) {
    await this.database.destroyDatabase(client)
  }

  static resolveTestResult(result: TestResult): string {
    switch (result) {
      case TestResult.PASS:
        return '✅'
      case TestResult.FAIL:
        return '❌'
      case TestResult.ERROR:
        return '❗'
      case TestResult.SKIPPED:
        return '⏭️'
    }
  }

  public logTestResult(
    testName: string,
    frameworkName: string,
    result: TestResult,
    time: number,
    error?: string
  ) {
    clearLine(process.stdout)
    console.log(
      `    ${BenchmarkSuite.resolveTestResult(
        result
      )} - ${testName} - ${frameworkName.padEnd(20, ' ')} - ${time}ms`
    )
    if (error) {
      console.log(chalk.red(`      ${error}`))
    }
  }

  public async validateTest(
    validationFn: (data?: any) => Promise<boolean>,
    data?: any
  ): Promise<TestResult> {
    try {
      await validationFn(data)
      return TestResult.PASS
    } catch (e) {
      if (e instanceof AssertionError) {
        return TestResult.FAIL
      }
      return TestResult.ERROR
    }
  }

  public async runTestLatency() {
    throw new Error('Not implemented')
  }

  public async runTestThroughput() {
    throw new Error('Not implemented')
  }

  public async runSuite(implementation: T) {
    throw new Error('Not implemented')
  }
}
