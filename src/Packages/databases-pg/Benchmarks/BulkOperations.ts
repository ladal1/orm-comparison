import { sql } from '@databases/pg'
import { bulkInsert } from '@databases/pg-bulk'
import { BulkOperationsBenchmark } from 'Benchmarks/BulkOperations'
import { db, dbTables } from '..'
import { map } from 'lodash'

const BulkOperations: BulkOperationsBenchmark = {
  bulkInsert: async data => {
    await bulkInsert({
      columnTypes: {
        id: sql`int`,
        house_address: sql`text`,
        has_dog: sql`boolean`,
      },
      columnsToInsert: ['id', 'house_address', 'has_dog'],
      database: db,
      tableName: 'house',
      records: map(data, ({ id, houseAddress, hasDog }) => ({
        id,
        house_address: houseAddress,
        has_dog: hasDog,
      })),
    })
    return dbTables.house(db).count()
  },
  bulkDelete: async toyName => {
    await dbTables.toy(db).delete({ toy_name: toyName })
    return dbTables.toy(db).count({ toy_name: toyName })
  },
  bulkUpdate: async (originalCurrency, resultingCurrency) => {
    await dbTables
      .toy(db)
      .update({ currency: originalCurrency }, { currency: resultingCurrency })
    return dbTables.toy(db).count({ currency: resultingCurrency })
  },
  pagination: async pageSize => {
    const pages = []
    while (true) {
      // Does not include call for the offset
      // dbTables.cat(db).find().orderByDesc('id').limit()
      const newPage: any[] = await db.query(
        sql`SELECT * from cat limit ${(1 + pages.length) * pageSize} offset ${
          pages.length * pageSize
        }`
      )
      if (newPage.length === 0) break
      pages.push(newPage)
    }
    return pages
  },
}

export default BulkOperations
