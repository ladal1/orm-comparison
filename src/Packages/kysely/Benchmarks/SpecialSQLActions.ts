import { sql } from 'kysely'
import { kyselyInstance } from '..'
import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'

const SpecialSQLActions: SpecialSQLActionsBenchmark = {
  upsertToysToHouse: async ({ houseId, toyId, amount }) => {
    return kyselyInstance
      .insertInto('toy_house')
      .values({ house_id: houseId, toy_id: toyId, amount })
      .onConflict(oc =>
        oc
          .columns(['house_id', 'toy_id'])
          .doUpdateSet({ amount: sql`toy_house.amount + ${amount}` })
      )
      .returning('amount')
      .executeTakeFirst()
      .then(data => data?.amount ?? -1)
  },
  JSONColumn: async (id: number) => {
    return kyselyInstance
      .selectFrom('toys_producer')
      .select('stock_info')
      .where('id', '=', id)
      .executeTakeFirst()
      .then(data => data?.stock_info ?? {})
  },
  JSONWhere: async (ticker: string) => {
    return (
      kyselyInstance
        .selectFrom('toys_producer')
        .select('stock_info')
        .where(sql`stock_info`, '@>', sql`${{ ticker }}`)
        // .where(sql`stock_info->>'ticker'`, '=', ticker)
        .executeTakeFirst()
        .then(data => data?.stock_info ?? {})
    )
  },
  transactionalOperations: async (producer, toy) => {
    await kyselyInstance.transaction().execute(async trx => {
      await trx.insertInto('toys_producer').values(producer).execute()
      await trx.insertInto('toy').values(toy).execute()
      await sql<void>`rollback`.execute(trx)
    })
    return kyselyInstance
      .selectFrom('toys_producer')
      .select(kyselyInstance.fn.count('id').as('count'))
      .executeTakeFirst()
      .then(data => Number(data?.count) ?? 0)
  },
  likeQuery: async (query: string) => {
    return kyselyInstance
      .selectFrom('house')
      .select('id')
      .where('house_address', 'like', `%${query}%`)
      .execute()
      .then(data => data.map(d => d.id))
  },
  ilikeQuery: async (query: string) => {
    return kyselyInstance
      .selectFrom('house')
      .select('id')
      .where('house_address', 'ilike', `%${query}%`)
      .execute()
      .then(data => data.map(d => d.id))
  },
}

export default SpecialSQLActions
