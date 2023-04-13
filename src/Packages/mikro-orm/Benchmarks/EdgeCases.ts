import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { getEntityManager } from '..'
import { Cat } from '../Databases/CatDatabase/Cat'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query => {
    return getEntityManager('EdgeCases').count(Cat, {
      catName: { $like: `%${query}%` },
    })
  },
}

export default EdgeCases
