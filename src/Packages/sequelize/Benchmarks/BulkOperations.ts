import { BulkOperationsBenchmark } from 'Benchmarks/BulkOperations'
import { House } from '../Databases/CatDatabase/House'
import { Toy } from '../Databases/CatDatabase/Toy'
import { Cat } from '../Databases/CatDatabase/Cat'

const BulkOperations: BulkOperationsBenchmark = {
  bulkInsert: async data => {
    await House.bulkCreate(data)
    return House.count()
  },
  bulkDelete: async toyName => {
    await Toy.destroy({ where: { toyName } })
    return Toy.count({ where: { toyName } })
  },
  bulkUpdate: async (originalCurrency, resultingCurrency) => {
    await Toy.update(
      { currency: resultingCurrency },
      { where: { currency: originalCurrency } }
    )
    return Toy.count({ where: { currency: resultingCurrency } })
  },
  pagination: async pageSize => {
    const pages = []
    while (true) {
      const newPage: any[] = await Cat.findAll({
        limit: (1 + pages.length) * pageSize,
        offset: pages.length * pageSize,
      })
      if (newPage.length === 0) break
      pages.push(newPage)
    }
    return pages
  },
}

export default BulkOperations
