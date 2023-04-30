import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { BenchDataSource } from '..'
import { Like } from 'typeorm'
import { Cat } from '../Databases/CatDatabase/Cat'
import { Toy } from '../Databases/CatDatabase/Toy'

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
  maxQuery: async () => {
    return BenchDataSource.getRepository(Toy)
      .createQueryBuilder('cat')
      .select('MAX(cat.price)', 'max')
      .getRawOne()
      .then(data => Number(data.max ?? 0))
  },
}

export default EdgeCases
