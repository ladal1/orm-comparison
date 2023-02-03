import { sampleTest } from 'Benchmarks/SampleBenchmark'

const MvpBench: sampleTest = {
  sampleTest: async () => {
    return true
  },
  secondTest: async () => {
    return true
  },
  throwTest: async () => {
    throw new Error('Test')
  },
  assertionFailTest: async () => {
    return true
  },
}

export default MvpBench
