import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { BenchDataSource } from '..'
import { Like } from 'typeorm'
import { Cat } from '../Databases/CatDatabase/Cat'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query => {
    return BenchDataSource.getRepository(Cat).countBy({
      catName: Like(`%${query}%`),
    })
  },
  bigIntColumn: async (catName: string) => {
    return BenchDataSource.getRepository(Cat)
      .findOne({
        where: { catName },
      })
      .then(cat => BigInt(cat?.id ?? 0))
  },
}

export default EdgeCases
