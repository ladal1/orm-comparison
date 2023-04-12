import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'
import { knexInstance } from '..'

const SpecialSQLActions: SpecialSQLActionsBenchmark = {
  upsertToysToHouse: async ({ houseId, toyId, amount }) => {
    return knexInstance
      .insert({ house_id: houseId, toy_id: toyId, amount })
      .into('toy_house')
      .onConflict(['house_id', 'toy_id'])
      .merge({
        amount: knexInstance.raw('toy_house.amount + ?', [amount]),
      })
      .returning<Array<{ amount: number }>>('amount')
      .then(data => data[0].amount)
  },
  bigIntColumn: async (name: string) => {
    return knexInstance
      .select('id')
      .from('cat')
      .where('cat_name', '=', name)
      .first()
      .then(data => BigInt(data?.id) ?? BigInt(0))
  },
  JSONColumn: async (id: number) => {
    return knexInstance
      .select('stock_info')
      .from('toys_producer')
      .where('id', '=', id)
      .first()
      .then(data => data?.stock_info ?? {})
  },
  JSONWhere: async (ticker: string) => {
    return (
      knexInstance
        .select('stock_info')
        .from('toys_producer')
        // .where('stock_info', '@>', JSON.stringify({ ticker }))
        .where(knexInstance.raw("stock_info->>'ticker'"), '=', ticker)
        .first()
        .then(data => data?.stock_info ?? {})
    )
  },
  transactionalOperations: async (producer, toy) => {
    await knexInstance.transaction(async trx => {
      await trx.insert(producer).into('toys_producer')
      await trx.insert(toy).into('toy')
      await trx.rollback()
    })
    return knexInstance
      .count('id')
      .from('toys_producer')
      .first()
      .then(data => Number(data?.count) ?? 0)
  },
  likeQuery: async (query: string) => {
    return knexInstance
      .select('id')
      .from('house')
      .whereLike('house_address', query)
      .then(data => data.map(d => d.id))
  },
}

export default SpecialSQLActions
