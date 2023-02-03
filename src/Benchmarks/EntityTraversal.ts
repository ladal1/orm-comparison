import {
  BenchmarkSuite,
  TestTemplate,
} from 'Benchmark/BenchmarkRunner/BenchmarkSuite'
import { CatDatabase } from 'Databases/CatDatabase/CatDatabase'
import assert from 'assert/strict'

export interface EntityTraversalTest extends TestTemplate {
  getCatColor: (id: number) => Promise<string>
  countCatsByColor: (hex_color: string) => Promise<number>
  getToysAvailableToCat: (id: number) => Promise<string[]>
}

export const EntityTraversal = new BenchmarkSuite<EntityTraversalTest>(
  'Entity Traversal',
  CatDatabase,
  {
    getCatColor: {
      testName: 'Get Color hex from cat id',
      referenceCheck: async (data: string) => {
        assert.equal(data, '#ff0000')
      },
      call: (implementation: EntityTraversalTest['getCatColor']) => () =>
        implementation(1),
      testLatency: true,
      testThroughput: true,
      throughputIterations: 1000,
    },
    countCatsByColor: {
      testName: 'Count all cats by color hex',
      referenceCheck: async (data: number) => {
        assert.equal(data, 3)
      },
      call: (implementation: EntityTraversalTest['countCatsByColor']) => () =>
        implementation('#ff0000'),
      testLatency: true,
      testThroughput: true,
      throughputIterations: 1000,
    },
    getToysAvailableToCat: {
      testName: 'Get all toys available to a cat',
      referenceCheck: async (data: string[]) => {
        assert.deepEqual(data, ['ball', 'mouse'])
      },
      call:
        (implementation: EntityTraversalTest['getToysAvailableToCat']) => () =>
          implementation(10),
      testLatency: true,
      testThroughput: true,
      throughputIterations: 1000,
    },
  }
)
