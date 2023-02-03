import { TestTemplate } from 'Benchmark/BenchmarkRunner/BenchmarkSuite'
import { BenchmarkSuite } from '../Benchmark/BenchmarkRunner'
import { CatDatabase } from '../Databases/CatDatabase/CatDatabase'
import assert from 'assert/strict'

export interface sampleTest extends TestTemplate {
  sampleTest: () => Promise<boolean>
  secondTest: () => Promise<boolean>
  throwTest: () => Promise<boolean>
  assertionFailTest: () => Promise<boolean>
}

const MvpBench = new BenchmarkSuite<sampleTest>('MvpBench', CatDatabase, {
  sampleTest: {
    testName: 'MvpBench',
    referenceCheck: async data => {
      assert.deepEqual(data, true)
    },
    testLatency: true,
    testThroughput: true,
    throughputIterations: 1000,
  },
  secondTest: {
    testName: 'MvpBench 2',
    referenceCheck: async data => {
      assert.deepEqual(data, true)
    },
    testLatency: true,
    testThroughput: true,
    throughputIterations: 1000,
  },
  throwTest: {
    testName: 'MvpBench 3 - throw',
    referenceCheck: async data => {
      assert.deepEqual(data, true)
    },
    testLatency: true,
    testThroughput: true,
    throughputIterations: 1000,
  },
  assertionFailTest: {
    testName: 'MvpBench 4 - assertion fail',
    referenceCheck: async data => {
      assert.deepEqual(data, false)
    },
    testLatency: true,
  },
})

export default MvpBench
