import { getClient } from 'Packages/pgtyped'
import { sqlInjection } from './EdgeCases.queries'
import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query => {
    return sqlInjection
      .run({ query: `%${query}%` }, getClient())
      .then(result => Number(result[0].count))
  },
}

export default EdgeCases
