import { getClient } from 'Packages/pgtyped'
import { bigIntColumn, sqlInjection } from './EdgeCases.queries'
import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query => {
    return sqlInjection
      .run({ query: `%${query}%` }, getClient())
      .then(result => Number(result[0].count))
  },
  bigIntColumn: async (name: string) => {
    return bigIntColumn
      .run({ name }, getClient())
      .then(data => BigInt(data[0].id) ?? BigInt(0))
  },
}

export default EdgeCases
