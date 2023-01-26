import { TestTemplate } from 'Benchmark/BenchmarkRunner/BenchmarkSuite'
import { BenchmarkSuite } from '../Benchmark/BenchmarkRunner'
import { CatDatabase } from '../Databases/CatDatabase/CatDatabase'
import assert from 'assert/strict'

interface sampleTest extends TestTemplate {
  sampleTest: () => Promise<boolean>
}

const MvpBench = new BenchmarkSuite<sampleTest>('MvpBench', CatDatabase)

MvpBench.addTests([
  {
    testName: 'MvpBench',
    referenceCheck: async data => {
      assert.deepEqual(data, 1)
    },
    testLatency: true,
    testThroughput: true,
  },
])

export default MvpBench
