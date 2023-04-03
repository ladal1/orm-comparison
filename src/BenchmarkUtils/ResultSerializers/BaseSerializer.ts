/* eslint-disable @typescript-eslint/no-empty-function */
import {
  TestType,
  TestValidationResult,
} from 'BenchmarkUtils/BenchmarkRunner/BenchmarkSuite'

export abstract class BaseSerializer {
  public async openSerializer() {}

  public abstract serializeTest(
    databaseName: string,
    suiteName: string,
    testName: string,
    packageName: string,
    testType: TestType,
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
