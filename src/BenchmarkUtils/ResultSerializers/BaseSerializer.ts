/* eslint-disable @typescript-eslint/no-empty-function */
import { TestValidationResult } from 'BenchmarkUtils/BenchmarkRunner/BenchmarkSuite'

export abstract class BaseSerializer {
  public async openSerializer() {}

  public abstract serializeTest(
    databaseName: string,
    suiteName: string,
    testName: string,
    packageName: string,
    testType: 'Latency' | 'Throughput',
    testResult: TestValidationResult
  ): void

  public abstract serializeSuite(
    databaseName: string,
    suiteName: string,
    packageName: string
  ): void

  public separateTestType() {}

  public async closeSerializer() {}

  public closeSuite() {}
}
