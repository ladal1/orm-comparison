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
  bigIntColumn: async (name: string) => {
    return clients.CatDatabase.cat
      .findFirst({
        where: {
          cat_name: name,
        },
      })
      .then(data => data?.id ?? BigInt(0))
  },
  maxQuery: async () => {
    return clients.CatDatabase.toy
      .aggregate({
        _max: {
          price: true,
        },
      })
      .then(data => Number(data._max.price ?? 0))
  },
}

export default EdgeCases
