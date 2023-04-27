import { BulkOperationsBenchmark } from 'Benchmarks/BulkOperations'
import { knexInstance } from '..'
import { map } from 'lodash'

const BulkOperations: BulkOperationsBenchmark = {
  bulkInsert: async data => {
    await knexInstance.batchInsert(
      'house',
      map(data, ({ id, houseAddress, hasDog }) => ({
        id,
        house_address: houseAddress,
        has_dog: hasDog,
      }))
    )
    return knexInstance('house')
      .count<{ count: string }>()
      .first()
      .then(houseCount => Number(houseCount?.count ?? -1))
  },
  bulkDelete: async toyName => {
    await knexInstance('toy').where({ toy_name: toyName }).del()
    return knexInstance('toy')
      .count<{ count: string }>()
      .where({ toy_name: toyName })
      .first()
      .then(toyCount => Number(toyCount?.count ?? -1))
  },
  bulkUpdate: async (originalCurrency, resultingCurrency) => {
    await knexInstance('toy')
      .where({ currency: originalCurrency })
      .update({ currency: resultingCurrency })
    return knexInstance('toy')
      .count<{ count: string }>()
      .where({ currency: resultingCurrency })
      .first()
      .then(toyCount => Number(toyCount?.count ?? -1))
  },
  pagination: async pageSize => {
    const pages = []
    while (true) {
      const newPage: any[] = await knexInstance('cat')
        .limit((1 + pages.length) * pageSize)
        .offset(pages.length * pageSize)
        .select('*')
      if (newPage.length === 0) break
      pages.push(newPage)
    }
    return pages
  },
}

export default BulkOperations
