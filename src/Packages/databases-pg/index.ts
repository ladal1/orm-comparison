import createConnectionPool, { ConnectionPool } from '@databases/pg'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import config from 'config'
import tables from '@databases/pg-typed'
import DatabaseSchema from './Databases/CatDatabase'
import EntityTraversal from './Benchmarks/EntityTraversal'
import SpecialSQLActions from './Benchmarks/SpecialSQLActions'
import DatabaseSchemaJson from './Databases/CatDatabase/schema.json'

let dbPool: ConnectionPool
let dbTables: ReturnType<typeof tables<DatabaseSchema>>

const initialize = async (database: string) => {
  dbPool = createConnectionPool({
    connectionString: config.database.url,
    bigIntMode: 'bigint',
  })
  dbTables = tables<DatabaseSchema>({
    databaseSchema: DatabaseSchemaJson,
  })
}

const destroy = async () => {
  await dbPool.dispose()
}

export const DatabasesPackage: IORMPackage = {
  name: '@Databases/Pg',
  initialize,
  destroy,
  implementations: {
    EntityTraversal,
    SpecialSQLActions,
  },
}

export { dbPool as db, dbTables }
