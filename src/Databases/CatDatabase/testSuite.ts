import { BenchmarkSuite } from '../../Benchmark/BenchmarkRunner'

const MvpBench = new BenchmarkSuite('MvpBench')

MvpBench.add('MvpBench', async () => {
  return true
})

export default MvpBench
