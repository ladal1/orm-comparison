import { BulkOperationsBenchmark } from 'Benchmarks/BulkOperations'
import { BenchDataSource } from '..'
import { House } from '../Databases/CatDatabase/House'
import { Toy } from '../Databases/CatDatabase/Toy'
import { chunk } from 'lodash'
import { Cat } from '../Databases/CatDatabase/Cat'

const BulkOperations: BulkOperationsBenchmark = {
  bulkInsert: async data => {
    for (const ch of chunk(data, 1000)) {
      await BenchDataSource.getRepository(House).insert(ch)
    }
    return BenchDataSource.getRepository(House).count()
  },
  bulkDelete: async toyName => {
    await BenchDataSource.getRepository(Toy).delete({ toyName })
    return BenchDataSource.getRepository(Toy).countBy({ toyName })
  },
  bulkUpdate: async (originalCurrency, resultingCurrency) => {
    await BenchDataSource.getRepository(Toy).update(
      { currency: originalCurrency },
      { currency: resultingCurrency }
    )
    return BenchDataSource.getRepository(Toy).countBy({
      currency: resultingCurrency,
    })
  },
  pagination: async pageSize => {
    const pages = []
    while (true) {
      const newPage = await BenchDataSource.getRepository(Cat).find({
        take: pageSize,
        skip: pages.length * pageSize,
      })
      if (newPage.length === 0) break
      pages.push(newPage)
    }
    return pages
  },
}

export default BulkOperations
