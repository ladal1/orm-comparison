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
}

export default EdgeCases
