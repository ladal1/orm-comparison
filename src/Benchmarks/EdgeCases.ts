import { BenchmarkSuite } from 'BenchmarkUtils/BenchmarkRunner'
import { TestTemplate } from 'BenchmarkUtils/BenchmarkRunner/BenchmarkSuite'
import { CatDatabase } from 'Databases/CatDatabase/CatDatabase'
import assert from 'node:assert/strict'

export interface EdgeCasesBenchmark extends TestTemplate {
  sqlInjection: (query: string) => Promise<number>
  bigIntColumn: (name: string) => Promise<bigint>
}

export const EdgeCases = new BenchmarkSuite<EdgeCasesBenchmark>(
  'EdgeCases',
  CatDatabase,
  {
    // SQL injection through extended condition, select cats with name like
    sqlInjection: {
      testName: 'SQL injection condition',
      referenceCheck: async (data: string) => {
        assert.equal(data, 1)
      },
      call: (implementation: EdgeCasesBenchmark['sqlInjection']) => () =>
        implementation("a ' or true --"),
      testValidity: true,
    },
    // Get the big int column from the table, for type handling
    bigIntColumn: {
      testName: 'BigInt Parsing',
      referenceCheck: async (data: number) => {
        assert.equal(data, BigInt('9223372036854775800'))
      },
      call: (implementation: EdgeCasesBenchmark['bigIntColumn']) => () =>
        implementation('Johnny Bignumber'),
      testValidity: true,
    },
  }
)
