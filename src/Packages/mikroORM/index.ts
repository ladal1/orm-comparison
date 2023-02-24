import { MikroORM, ReflectMetadataProvider } from '@mikro-orm/core'
import type { PostgreSqlDriver, SqlEntityManager } from '@mikro-orm/postgresql'
import EntityTraversal from './Benchmarks/EntityTraversal'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import 'reflect-metadata'

let mikroORM: MikroORM<PostgreSqlDriver>
const contextMap = new Map()

const initialize = async () => {
  mikroORM = await MikroORM.init<PostgreSqlDriver>({
    metadataProvider: ReflectMetadataProvider,
    entitiesTs: ['./src/Packages/mikroORM/Databases/CatDatabase'], // path to our TS entities (src), relative to `baseDir`
    entities: ['./dist/Packages/mikroORM/Databases/CatDatabase'], // path to our JS entities (dist), relative to `baseDir`
    dbName: 'benchmark',
    type: 'postgresql',
    user: 'benchmark',
    password: 'benchmark_pwd',
    host: 'localhost',
    entityGenerator: {
      bidirectionalRelations: true,
    },
  })
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
  },
}
