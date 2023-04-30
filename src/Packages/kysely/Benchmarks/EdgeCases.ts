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
  bigIntColumn: async (name: string) => {
    return kyselyInstance
      .selectFrom('cat')
      .select('id')
      .where('cat_name', '=', name)
      .executeTakeFirst()
      .then(data => BigInt(data?.id ?? 0))
  },
  maxQuery: async () => {
    return kyselyInstance
      .selectFrom('toy')
      .select(kyselyInstance.fn.max('price').as('max_price'))
      .executeTakeFirst()
      .then(data => Number(data?.max_price) ?? 0)
  },
}

export default EdgeCases
