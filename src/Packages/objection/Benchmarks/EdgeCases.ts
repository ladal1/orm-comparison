import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { Cat } from '../Databases/CatDatabase/Cat'
import { Toy } from '../Databases/CatDatabase/Toy'

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
  maxQuery: async () => {
    return Toy.query()
      .max('price')
      .first()
      .then(data => Number((data as unknown as { max: number }).max ?? 0))
  },
}

export default EdgeCases
