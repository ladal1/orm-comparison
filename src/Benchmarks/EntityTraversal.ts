import {
  BenchmarkSuite,
  TestTemplate,
} from 'BenchmarkUtils/BenchmarkRunner/BenchmarkSuite'
import { CatDatabase } from 'Databases/CatDatabase/CatDatabase'
import assert from 'assert/strict'

export interface EntityTraversalBenchmark extends TestTemplate {
  getCatColor: (id: number) => Promise<string>
  countCatsByColor: (hex_color: string) => Promise<number>
  getToysAvailableToCat: (id: number) => Promise<string[]>
}

export const EntityTraversal = new BenchmarkSuite<EntityTraversalBenchmark>(
  'EntityTraversal',
  CatDatabase,
  {
    getCatColor: {
      testName: 'Get Color hex from cat id',
      referenceCheck: async (data: string) => {
        assert.equal(data, '#ff8b28')
      },
      call: (implementation: EntityTraversalBenchmark['getCatColor']) => () =>
        implementation(1),
      testValidity: true,
      testLatency: true,
      latencyIterations: 1000,
    },
    countCatsByColor: {
      testName: 'Count all cats by color hex',
      referenceCheck: async (data: number) => {
        assert.equal(data, 23)
      },
      call:
        (implementation: EntityTraversalBenchmark['countCatsByColor']) => () =>
          implementation('#ff8b28'),
      testValidity: true,
      testLatency: true,
      latencyIterations: 1000,
    },
    getToysAvailableToCat: {
      testName: 'Get all toys available to a cat',
      referenceCheck: async (data: string[]) => {
        assert.deepEqual(data, ['Ball', 'Mouse'])
      },
      call:
        (implementation: EntityTraversalBenchmark['getToysAvailableToCat']) =>
        () =>
          implementation(1),
      testValidity: true,
      testLatency: true,
      latencyIterations: 1000,
    },
  }
)
