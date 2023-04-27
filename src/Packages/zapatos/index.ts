import config from 'config'
import pg from 'pg'
import EntityTraversal from './Benchmarks/EntityTraversal'
import EdgeCases from './Benchmarks/EdgeCases'
import SpecialSQLActions from './Benchmarks/SpecialSQLActions'
import BulkOperations from './Benchmarks/BulkOperations'

export let pgPool: pg.Pool

const initialize = async () => {
  pgPool = new pg.Pool({ connectionString: config.database.url })
}

const destroy = async () => {
  await pgPool.end()
}

export const ZapatosPackage = {
  name: 'Zapatos',
  initialize,
  destroy,
  implementations: {
    EntityTraversal,
    SpecialSQLActions,
    EdgeCases,
    BulkOperations,
  },
}
