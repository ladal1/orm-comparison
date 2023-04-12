import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'
import { db, dbTables } from '..'
import { sql } from '@databases/pg'
import { Skipped } from 'BenchmarkUtils/BenchmarkRunner'

const SpecialSQLActions: SpecialSQLActionsBenchmark = {
  upsertToysToHouse: async ({ houseId, toyId, amount }) => {
    return db
      .query(
        sql`
        INSERT INTO toy_house (toy_id, house_id, amount)
        VALUES (${toyId}, ${houseId}, ${amount}) ON CONFLICT (toy_id, house_id) DO
        UPDATE SET amount = ${amount} + toy_house.amount RETURNING amount;`
      )
      .then(r => r[0].amount)
  },
  bigIntColumn: async catName => {
    return dbTables
      .cat(db)
      .find({ cat_name: catName })
      .one()
      .then(r => r?.id ?? BigInt(0))
  },
  JSONColumn: async id => {
    throw new Skipped()
  },
  JSONWhere: async ticker => {
    throw new Skipped()
  },
  likeQuery: async query => {
    throw new Skipped()
  },
  transactionalOperations: async (producer, toy) => {
    throw new Skipped()
  },
}

export default SpecialSQLActions
