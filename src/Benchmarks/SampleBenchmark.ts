import { TestTemplate } from 'Benchmark/BenchmarkRunner/BenchmarkSuite'
import { BenchmarkSuite } from '../Benchmark/BenchmarkRunner'
import { CatDatabase } from '../Databases/CatDatabase/CatDatabase'
import assert from 'assert/strict'

interface sampleTest extends TestTemplate {
  sampleTest: () => Promise<boolean>
}

const MvpBench = new BenchmarkSuite<sampleTest>('MvpBench', CatDatabase, [
  {
    testName: 'MvpBench',
    referenceCheck: async data => {
      assert.deepEqual(data, 1)
    },
    testLatency: true,
    testThroughput: true,
    throughputIterations: 1000,
  },
])

export default MvpBench
