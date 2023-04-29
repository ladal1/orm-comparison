import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'
import { db, dbTables } from '..'
import { sql } from '@databases/pg'
import { jsonPath } from '@databases/pg-typed'

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

  JSONColumn: async id => {
    return dbTables
      .toys_producer(db)
      .find({ id })
      .one()
      .then(r => r?.stock_info ?? {})
  },
  JSONWhere: async ticker => {
    return dbTables
      .toys_producer(db)
      .find({ stock_info: jsonPath(['ticker'], ticker) })
      .one()
      .then(r => r?.stock_info ?? {})
  },
  likeQuery: async query => {
    return db
      .query(
        sql`
      SELECT id FROM house WHERE house_address LIKE ${'%' + query + '%'};`
      )
      .then(r => r.map(d => d.id))
  },
  transactionalOperations: async (producer, toy) => {
    await db.tx(async t => {
      await dbTables.toys_producer(t).insert(producer)
      await dbTables.toy(t).insert({ ...toy, price: toy.price.toString() })
      await t.query(sql`ROLLBACK;`)
    })
    return dbTables.toys_producer(db).count()
  },
  ilikeQuery: async query => {
    return db
      .query(
        sql`
      SELECT id FROM house WHERE house_address ILIKE ${'%' + query + '%'};`
      )
      .then(r => r.map(d => d.id))
  },
}

export default SpecialSQLActions
