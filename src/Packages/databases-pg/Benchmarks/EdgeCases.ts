import { sql } from '@databases/pg'
import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { db } from '..'

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
}

export default EdgeCases
