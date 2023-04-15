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
}

export default EdgeCases
