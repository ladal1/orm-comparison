import { BulkOperationsBenchmark } from 'Benchmarks/BulkOperations'
import { House } from '../Databases/CatDatabase/House'
import { getEntityManager } from '..'
import { Toy } from '../Databases/CatDatabase/Toy'
import { Cat } from '../Databases/CatDatabase/Cat'

const BulkOperations: BulkOperationsBenchmark = {
  bulkInsert: async data => {
    await getEntityManager('BulkOperations').insertMany(House, data)
    // Slow (extremely)
    // for (const house of data) {
    // const h = new House({
    //   id: house.id,
    //   houseAddress: house.houseAddress,
    //   hasDog: house.hasDog,
    // })
    // getEntityManager('BulkOperations').persist(h)
    // }
    // await getEntityManager('BulkOperations').flush()
    return getEntityManager('BulkOperations').count(House)
  },
  bulkDelete: async toyName => {
    await getEntityManager('BulkOperations').nativeDelete(Toy, {
      toyName,
    })
    return getEntityManager('BulkOperations').count(Toy, {
      toyName,
    })
  },
  bulkUpdate: async (originalCurrency, resultingCurrency) => {
    await getEntityManager('BulkOperations').nativeUpdate(
      Toy,
      { currency: originalCurrency },
      { currency: resultingCurrency }
    )
    return getEntityManager('BulkOperations').count(Toy, {
      currency: resultingCurrency,
    })
  },
  pagination: async pageSize => {
    const pages = []
    while (true) {
      const newPage: any[] = await getEntityManager('BulkOperations').find(
        Cat,
        {},
        { limit: pageSize, offset: pages.length * pageSize }
      )
      if (newPage.length === 0) break
      pages.push(newPage)
    }
    return pages
  },
}

export default BulkOperations
