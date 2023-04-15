import * as db from 'zapatos/db'
import type * as schema from 'zapatos/schema'
import { pgPool } from '..'
import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'

const SpecialSQLActions: SpecialSQLActionsBenchmark = {
  upsertToysToHouse: async ({ houseId, toyId, amount }) => {
    return db
      .upsert(
        'toy_house',
        {
          house_id: houseId,
          toy_id: toyId,
          amount,
        },
        ['house_id', 'toy_id'],
        {
          updateColumns: ['amount'],
          updateValues: {
            amount: db.sql`toy_house.amount + ${db.param(amount)}`,
          },
        }
      )
      .run(pgPool)
      .then(data => data.amount)
  },

  JSONColumn: async (id: number) => {
    return db
      .selectOne('toys_producer', { id }, { columns: ['stock_info'] })
      .run(pgPool)
      .then(data => (data?.stock_info as { [key: string]: string }) ?? {})
  },
  JSONWhere: async (ticker: string) => {
    const stockInfoColumn = ['stock_info'] as const
    return db.sql<
      schema.toys_producer.SQL,
      Array<schema.toys_producer.OnlyCols<typeof stockInfoColumn>>
    >`
      SELECT
        ${'toys_producer'}.${'stock_info'}
      FROM
        ${'toys_producer'}
      WHERE
        ${'toys_producer'}.${'stock_info'} @> ${db.param(
      JSON.stringify({ ticker })
    )};`
      .run(pgPool)
      .then(data => (data[0].stock_info as { [key: string]: string }) ?? {})
  },
  transactionalOperations: async (producer, toy) => {
    await db.transaction(pgPool, db.IsolationLevel.ReadCommitted, async tx => {
      await db.insert('toys_producer', producer).run(tx)
      await db.insert('toy', toy).run(tx)
      await db.sql`ROLLBACK;`.run(tx)
    })
    return db.count('toys_producer', {}).run(pgPool)
  },
  likeQuery: async (query: string) => {
    return db.sql<schema.house.SQL, schema.house.Selectable[]>`
      SELECT * FROM ${'house'} WHERE ${'house'}.${'house_address'} LIKE ${db.param(
      '%' + query + '%'
    )};`
      .run(pgPool)
      .then(data => data.map(house => house.id))
  },
}

export default SpecialSQLActions
