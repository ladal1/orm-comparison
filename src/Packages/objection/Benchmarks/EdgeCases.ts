import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { Cat } from '../Databases/CatDatabase/Cat'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query => {
    return Cat.query()
      .count()
      .where('cat_name', 'like', `%${query}%`)
      .first()
      .then((result: any) => Number(result.count))
  },
  bigIntColumn: async (name: string) => {
    return Cat.query()
      .select('id')
      .where('cat_name', '=', name)
      .first()
      .then(data => BigInt(data?.id ?? 0))
  },
}

export default EdgeCases
