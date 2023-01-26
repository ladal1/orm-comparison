import { TestValidationResult } from 'Benchmark/BenchmarkRunner/BenchmarkSuite'

export type TestResultSerializer = (
  databaseName: string,
  testName: string,
  implementationName: string,
  testType: 'Latency' | 'Throughput',
  testResult: TestValidationResult
) => void
