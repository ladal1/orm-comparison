import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import * as db from 'zapatos/db'
import * as schema from 'zapatos/schema'
import { conditions as dc } from 'zapatos/db'
import { pgPool } from '..'
// import { NotSupported } from 'BenchmarkUtils/BenchmarkRunner'

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
  bigIntColumn: async (name: string) => {
    // throw new NotSupported(
    //   'Bigint loses precision when converted to Number by zapatos'
    // )
    return db.sql<
      schema.cat.SQL,
      schema.cat.Selectable[]
    >`SELECT * FROM ${'cat'} WHERE ${'cat_name'} = ${db.param(name)}`
      .run(pgPool)
      .then(rows => BigInt(rows[0].id ?? 0))
    // return db
    //   .selectExactlyOne('cat', { cat_name: name }, { columns: ['id'] })
    //   .run(pgPool)
    //   .then(data => BigInt(data?.id ?? 0))
  },
}

export default EdgeCases
