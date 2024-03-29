import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'
import {
  iLikeQuery,
  jsonColumn,
  jsonWhere,
  likeQuery,
  transactionalOperationsCountProducers,
  transactionalOperationsInsertProducer,
  transactionalOperationsInsertToy,
  upsertToysToHouse,
} from './SpecialSQLActions.queries'
import { getClient } from '../..'

const SpecialSQLActions: SpecialSQLActionsBenchmark = {
  upsertToysToHouse: async ({ houseId, toyId, amount }) => {
    return upsertToysToHouse
      .run({ houseId, toyId, amount }, getClient())
      .then(data => data[0].amount)
  },
  JSONColumn: async (id: number) => {
    return jsonColumn
      .run({ id }, getClient())
      .then(data => (data[0].stock_info as { [key: string]: string }) ?? {})
  },
  JSONWhere: async (ticker: string) => {
    return jsonWhere
      .run({ ticker }, getClient())
      .then(data => (data[0].stock_info as { [key: string]: string }) ?? {})
  },
  transactionalOperations: async (producer, toy) => {
    const client = getClient()
    await client.query('BEGIN')
    await transactionalOperationsInsertProducer.run(producer, client)
    await transactionalOperationsInsertToy.run(
      { ...toy, price: toy.price.toString() },
      client
    )
    await client.query('ROLLBACK')
    return transactionalOperationsCountProducers
      .run(undefined, client)
      .then(data => Number(data[0].count) ?? 0)
  },
  likeQuery: async (query: string) => {
    return likeQuery
      .run({ query }, getClient())
      .then(data => data.map(d => d.id))
  },
  ilikeQuery: async (query: string) => {
    return iLikeQuery
      .run({ query }, getClient())
      .then(data => data.map(d => d.id))
  },
}

export default SpecialSQLActions
