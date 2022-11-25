import { BenchmarkSuite } from 'BenchmarkRunner/BenchmarkSuite'

const MvpBench = new BenchmarkSuite('MvpBench')

MvpBench.add('MvpBench', async () => {
  return true
})

export default MvpBench
