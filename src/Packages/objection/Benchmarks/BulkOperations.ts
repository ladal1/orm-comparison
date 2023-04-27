import { BulkOperationsBenchmark } from 'Benchmarks/BulkOperations'
import { House } from '../Databases/CatDatabase/House'
import { chunk } from 'lodash'
import { Toy } from '../Databases/CatDatabase/Toy'
import { Cat } from '../Databases/CatDatabase/Cat'

const BulkOperations: BulkOperationsBenchmark = {
  bulkInsert: async data => {
    for (const ch of chunk(data, 1000)) {
      await House.query().insert(ch)
    }
    return House.query()
      .count()
      .first()
      .then(data => Number((data as unknown as { count: number })?.count ?? -1))
  },
  bulkDelete: async toyName => {
    await Toy.query().delete().where('toy_name', '=', toyName)
    return Toy.query()
      .count()
      .where('toy_name', '=', toyName)
      .first()
      .then(data => Number((data as unknown as { count: number })?.count ?? -1))
  },
  bulkUpdate: async (originalCurrency, resultingCurrency) => {
    await Toy.query()
      .patch({ currency: resultingCurrency })
      .where('currency', '=', originalCurrency)
    return Toy.query()
      .count()
      .where('currency', '=', resultingCurrency)
      .first()
      .then(data => Number((data as unknown as { count: number })?.count ?? -1))
  },
  pagination: async pageSize => {
    const pages = []
    while (true) {
      const newPage = await Cat.query().page(pages.length, pageSize)
      if (newPage.results.length === 0) break
      pages.push(newPage.results)
    }
    return pages
  },
}

export default BulkOperations
