import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { kyselyInstance } from '..'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async (query: string) => {
    return kyselyInstance
      .selectFrom('cat')
      .select(kyselyInstance.fn.count('cat.id').as('cat_count'))
      .where('cat_name', 'like', query)
      .executeTakeFirst()
      .then(data => Number(data?.cat_count ?? -1))
  },
}

export default EdgeCases
