import { map } from 'lodash'
import { kyselyInstance } from '..'
import { BulkOperationsBenchmark } from 'Benchmarks/BulkOperations'

const BulkOperations: BulkOperationsBenchmark = {
  bulkInsert: async data => {
    await kyselyInstance
      .insertInto('house')
      .values(
        map(data, ({ id, houseAddress, hasDog }) => ({
          id,
          house_address: houseAddress,
          has_dog: hasDog,
        }))
      )
      .execute()
    return kyselyInstance
      .selectFrom('house')
      .select(kyselyInstance.fn.count('id').as('count'))
      .executeTakeFirst()
      .then(data => Number(data?.count ?? -1))
  },
  bulkDelete: async toyName => {
    await kyselyInstance
      .deleteFrom('toy')
      .where('toy_name', '=', toyName)
      .execute()
    return kyselyInstance
      .selectFrom('toy')
      .select(kyselyInstance.fn.count('toy_name').as('count'))
      .where('toy_name', '=', toyName)
      .executeTakeFirst()
      .then(data => Number(data?.count ?? -1))
  },
  bulkUpdate: async (originalCurrency, resultingCurrency) => {
    await kyselyInstance
      .updateTable('toy')
      .set({ currency: resultingCurrency })
      .where('currency', '=', originalCurrency)
      .execute()
    return kyselyInstance
      .selectFrom('toy')
      .select(kyselyInstance.fn.count('currency').as('count'))
      .where('currency', '=', resultingCurrency)
      .executeTakeFirst()
      .then(data => Number(data?.count ?? -1))
  },
  pagination: async pageSize => {
    const pages = []
    while (true) {
      const newPage: any[] = await kyselyInstance
        .selectFrom('cat')
        .limit((1 + pages.length) * pageSize)
        .offset(pages.length * pageSize)
        .selectAll()
        .execute()
      if (newPage.length === 0) break
      pages.push(newPage)
    }
    return pages
  },
}

export default BulkOperations
