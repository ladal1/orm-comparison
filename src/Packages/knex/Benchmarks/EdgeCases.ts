import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { knexInstance } from '..'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query => {
    return knexInstance
      .count('*')
      .as('count')
      .from('cat')
      .where('cat_name', 'like', '%' + query + '%')
      .first()
      .then(data => Number(data?.count) ?? -1)
  },
  bigIntColumn: async (name: string) => {
    return knexInstance
      .select('id')
      .from('cat')
      .where('cat_name', '=', name)
      .first()
      .then(data => BigInt(data?.id) ?? BigInt(0))
  },
}

export default EdgeCases
