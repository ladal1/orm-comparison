import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import { PrismaClient as PrismaCatDatabase } from './Databases/CatDatabase/generated/client'
import EntityTraversal from './Benchmarks/EntityTraversal'
import { DatabaseName } from 'BenchmarkUtils/interfaces/DatabaseUtils'
import config from 'config'

const dynamicDatasource = {
  datasources: { db: { url: config.database.url } },
}

export const clients = {
  CatDatabase: new PrismaCatDatabase(dynamicDatasource),
}

const initialize = async (databaseName: DatabaseName) => {
  await clients[databaseName].$connect()
}

const destroy = async (databaseName: DatabaseName) => {
  await clients[databaseName].$disconnect()
}

const PrismaPackage: IORMPackage = {
  name: 'PrismaORM',
  initialize,
  destroy,
  implementations: {
    EntityTraversal,
  },
}

export { PrismaPackage }
