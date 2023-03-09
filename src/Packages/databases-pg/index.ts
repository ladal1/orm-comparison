import createConnectionPool, { ConnectionPool } from '@databases/pg'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import config from 'config'

let dbPool: ConnectionPool

const initialize = async (database: string) => {
  dbPool = createConnectionPool(config.database.url)
}

const destroy = async () => {
  await dbPool.dispose()
}

export const DatabasesPackage: IORMPackage = {
  name: '@Databases/Pg',
  initialize,
  destroy,
  implementations: {},
}

export { dbPool as pgPoolInstance }
