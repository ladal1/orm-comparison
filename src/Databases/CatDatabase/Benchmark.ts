import { TestTemplate } from 'Benchmark/BenchmarkRunner/BenchmarkSuite'
import { BenchmarkSuite } from '../../Benchmark/BenchmarkRunner'
import { CatDatabase } from './CatDatabase'
import assert from 'assert'

interface sampleTest extends TestTemplate {
  sampleTest: () => Promise<boolean>
}

const MvpBench = new BenchmarkSuite<sampleTest>('MvpBench', CatDatabase)

MvpBench.addTests([
  {
    testName: 'MvpBench',
    referenceCheck: async () => {
      assert.deepEqual(1, 1)
    },
  },
])

export default MvpBench
