import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { getEntityManager } from '..'
import { Cat } from '../Databases/CatDatabase/Cat'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query => {
    return getEntityManager('EdgeCases').count(Cat, {
      catName: { $like: `%${query}%` },
    })
  },
  bigIntColumn: async name => {
    return getEntityManager('SpecialSQLActions')
      .findOneOrFail(Cat, { catName: name })
      .then(data => BigInt(data.id))
  },
}

export default EdgeCases