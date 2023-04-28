import { MikroORM, ReflectMetadataProvider } from '@mikro-orm/core'
import type { PostgreSqlDriver, SqlEntityManager } from '@mikro-orm/postgresql'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import 'reflect-metadata'
import config from 'config'
import SpecialSQLActions from './Benchmarks/SpecialSQLActions'
import EntityTraversal from './Benchmarks/EntityTraversal'
import EdgeCases from './Benchmarks/EdgeCases'
import BulkOperations from './Benchmarks/BulkOperations'

let mikroORM: MikroORM<PostgreSqlDriver>
const contextMap = new Map()

const initialize = async () => {
  mikroORM = await MikroORM.init<PostgreSqlDriver>({
    metadataProvider: ReflectMetadataProvider,
    entitiesTs: ['./src/Packages/mikro-orm/Databases/CatDatabase'], // path to our TS entities (src), relative to `baseDir`
    entities: ['./dist/Packages/mikro-orm/Databases/CatDatabase'], // path to our JS entities (dist), relative to `baseDir`
    dbName: config.database.name,
    type: 'postgresql',
    user: config.database.user,
    password: config.database.password,
    host: config.database.host,
    port: config.database.port,
    entityGenerator: {
      bidirectionalRelations: true,
    },
  })
  // const generator = mikroORM.getEntityGenerator();
  // await generator.generate({
  //   save: true,
  //   baseDir: process.cwd() + '/src/Packages/mikro-orm/Databases/CatDatabase',
  // })
}

const destroy = async () => {
  await mikroORM.close(true)
}

export const getEntityManager = (
  key: string
): SqlEntityManager<PostgreSqlDriver> => {
  if (!contextMap.has(key)) {
    contextMap.set(key, mikroORM.em.fork())
  }
  return contextMap.get(key)
}

export const MikroORMPackage: IORMPackage = {
  name: 'MikroORM',
  initialize,
  destroy,
  implementations: {
    EntityTraversal,
    SpecialSQLActions,
    EdgeCases,
    BulkOperations,
  },
}
