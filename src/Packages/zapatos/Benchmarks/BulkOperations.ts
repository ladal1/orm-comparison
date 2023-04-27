import * as db from 'zapatos/db'
import { pgPool } from '..'
import { BulkOperationsBenchmark } from 'Benchmarks/BulkOperations'
import { chunk } from 'lodash'

const BulkOperations: BulkOperationsBenchmark = {
  bulkInsert: async data => {
    for (const ch of chunk(data, 1000)) {
      await db
        .insert(
          'house',
          ch.map(house => ({
            id: house.id,
            house_address: house.houseAddress,
            has_dog: house.hasDog,
          }))
        )
        .run(pgPool)
    }
    return db.count('house', {}).run(pgPool)
  },
  bulkDelete: async toyName => {
    await db.deletes('toy', { toy_name: toyName }).run(pgPool)
    return db.count('toy', { toy_name: toyName }).run(pgPool)
  },
  bulkUpdate: async (originalCurrency, resultingCurrency) => {
    await db
      .update(
        'toy',
        { currency: resultingCurrency },
        { currency: originalCurrency }
      )
      .run(pgPool)
    return db.count('toy', { currency: resultingCurrency }).run(pgPool)
  },
  pagination: async pageSize => {
    const pages = []
    while (true) {
      const newPage = await db
        .select('cat', {}, { limit: pageSize, offset: pages.length * pageSize })
        .run(pgPool)
      if (newPage.length === 0) break
      pages.push(newPage)
    }
    return pages
  },
}

export default BulkOperations
