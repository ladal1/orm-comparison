import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { clients } from '..'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query => {
    return clients.CatDatabase.cat.count({
      where: {
        cat_name: {
          contains: query,
        },
      },
    })
  },
}

export default EdgeCases
