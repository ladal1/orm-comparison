import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import * as db from 'zapatos/db'
import * as schema from 'zapatos/schema'
import { conditions as dc } from 'zapatos/db'
import { pgPool } from '..'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query => {
    return db.sql<
      schema.cat.SQL,
      Array<{ count: string }>
    >`SELECT COUNT(*) FROM ${'cat'} WHERE ${{
      cat_name: dc.like(`%${query}%`),
    }}`
      .run(pgPool)
      .then(rows => Number(rows[0].count))
  },
}

export default EdgeCases
