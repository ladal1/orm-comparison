import { Model, raw } from 'objection'
import { ToyHouse } from '../Databases/CatDatabase/ToyHouse'
import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'
import { ToysProducer } from '../Databases/CatDatabase/ToysProducer'
import { House } from '../Databases/CatDatabase/House'

const SpecialSQLActions: SpecialSQLActionsBenchmark = {
  upsertToysToHouse: async ({ houseId, toyId, amount }) => {
    return ToyHouse.query()
      .insert({ houseId, toyId, amount })
      .onConflict(['house_id', 'toy_id'])
      .merge({ amount: raw('toy_house.amount + ?', [amount]) })
      .returning('amount')
      .first()
      .then(data => data.amount)
  },
  JSONColumn: async (id: number) => {
    return ToysProducer.query()
      .select('stock_info')
      .where('id', '=', id)
      .first()
      .then(data => data?.stockInfo ?? {})
  },
  JSONWhere: async (ticker: string) => {
    return ToysProducer.query()
      .select('stock_info')
      .where('stock_info', '@>', JSON.stringify({ ticker }))
      .first()
      .then(data => data?.stockInfo ?? {})
  },
  transactionalOperations: async (producer, toy) => {
    await Model.transaction(async trx => {
      await trx.insert(producer).into('toys_producer')
      await trx.insert(toy).into('toy')
      await trx.rollback()
    })
    return ToysProducer.query()
      .count('id')
      .first()
      .then(data => Number((data as unknown as { count: string }).count ?? -1))
  },
  likeQuery: async (query: string) => {
    return House.query()
      .select('id')
      .where('house_address', 'like', `%${query}%`)
      .then(data => data.map(d => d.id))
  },
  ilikeQuery: async (query: string) => {
    return House.query()
      .select('id')
      .where('house_address', 'ilike', `%${query}%`)
      .then(data => data.map(d => d.id))
  },
}

export default SpecialSQLActions
