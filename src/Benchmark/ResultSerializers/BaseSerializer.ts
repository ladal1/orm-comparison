/* eslint-disable @typescript-eslint/no-empty-function */
import { TestValidationResult } from 'Benchmark/BenchmarkRunner/BenchmarkSuite'

export abstract class BaseSerializer {
  public abstract serializeTest(
    databaseName: string,
    testName: string,
    implementationName: string,
    testType: 'Latency' | 'Throughput',
    testResult: TestValidationResult
  ): void

  public abstract serializeSuite(databaseName: string, suiteName: string): void

  public separateTestType() {}

  public closeSerializer() {}

  public closeSuite() {}
}
