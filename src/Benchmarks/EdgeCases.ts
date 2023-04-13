import { BenchmarkSuite } from 'BenchmarkUtils/BenchmarkRunner'
import { TestTemplate } from 'BenchmarkUtils/BenchmarkRunner/BenchmarkSuite'
import { CatDatabase } from 'Databases/CatDatabase/CatDatabase'
import assert from 'node:assert/strict'

export interface EdgeCasesBenchmark extends TestTemplate {
  sqlInjection: (query: string) => Promise<void>
}

export const EdgeCases = new BenchmarkSuite<EdgeCasesBenchmark>(
  'EdgeCases',
  CatDatabase,
  {
    // SQL injection through extended condition, select cats with name like
    sqlInjection: {
      testName: 'SQL injection condition',
      referenceCheck: async (data: string) => {
        assert.equal(data, 0)
      },
      call: (implementation: EdgeCasesBenchmark['sqlInjection']) => () =>
        implementation("a ' or true --"),
      testValidity: true,
    },
  }
)
