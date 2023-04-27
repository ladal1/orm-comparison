import { BulkOperationsBenchmark } from 'Benchmarks/BulkOperations'
import { clients } from '..'

const BulkOperations: BulkOperationsBenchmark = {
  bulkInsert: async data => {
    await clients.CatDatabase.house.createMany({
      data: data.map(house => ({
        id: house.id,
        house_address: house.houseAddress,
        has_dog: house.hasDog,
      })),
    })
    return clients.CatDatabase.house.count()
  },
  bulkDelete: async toyName => {
    await clients.CatDatabase.toy.deleteMany({
      where: {
        toy_name: toyName,
      },
    })
    return clients.CatDatabase.toy.count({
      where: {
        toy_name: toyName,
      },
    })
  },
  bulkUpdate: async (originalCurrency, resultingCurrency) => {
    await clients.CatDatabase.toy.updateMany({
      where: {
        currency: originalCurrency,
      },
      data: {
        currency: resultingCurrency,
      },
    })
    return clients.CatDatabase.toy.count({
      where: {
        currency: resultingCurrency,
      },
    })
  },
  pagination: async pageSize => {
    const pages = []
    while (true) {
      const newPage: any[] = await clients.CatDatabase.cat.findMany({
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
