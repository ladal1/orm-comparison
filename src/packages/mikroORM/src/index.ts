import { MikroORM } from '@mikro-orm/core'
import type { PostgreSqlDriver } from '@mikro-orm/postgresql'
import EntityTraversal from './Benchmarks/EntityTraversal'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'

let mikroORM: MikroORM<PostgreSqlDriver>

const initialize = async () => {
  mikroORM = await MikroORM.init<PostgreSqlDriver>({
    entities: ['./CatDatabase'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['./CatDatabase'], // path to our TS entities (src), relative to `baseDir`
    dbName: 'benchmark',
    type: 'postgresql',
    user: 'benchmark',
    password: 'benchmark_pwd',
    host: 'localhost',
  })
}

const destroy = async () => {
  await mikroORM.close(true)
}

export const MikroORMPackage: IORMPackage = {
  name: 'MikroORM',
  initialize,
  destroy,
  implementations: {
    EntityTraversal,
  },
}
