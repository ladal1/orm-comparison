import { sql } from '@databases/pg'
import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { db, dbTables } from '..'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query => {
    return db
      .query(
        sql`SELECT COUNT(*) as COUNT FROM cat WHERE cat_name like ${
          '%' + query + '%'
        }`
      )
      .then(r => Number(r[0].count))
  },
  bigIntColumn: async catName => {
    return dbTables
      .cat(db)
      .find({ cat_name: catName })
      .one()
      .then(r => r?.id ?? BigInt(0))
  },
  maxQuery: async () => {
    return db
      .query(sql`SELECT MAX(price) FROM toy;`)
      .then(r => Number(r[0].max) ?? 0)
  },
}

export default EdgeCases
