import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import config from 'config'
import { omit } from 'lodash'
import CatDatabase from './Database/CatDatabase'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import EntityTraversal from './Benchmarks/EntityTraversal'
import SpecialSQLActions from './Benchmarks/SpecialSQLActions'
import EdgeCases from './Benchmarks/EdgeCases'

export let kyselyInstance: Kysely<CatDatabase>

const initialize = async () => {
  kyselyInstance = new Kysely<CatDatabase>({
    dialect: new PostgresDialect({
      pool: new Pool(omit(config.database, 'url')),
    }),
  })
}

const destroy = async () => {
  await kyselyInstance.destroy()
}

export const KyselyPackage: IORMPackage = {
  name: 'Kysely',
  initialize,
  destroy,
  implementations: {
    EntityTraversal,
    SpecialSQLActions,
    EdgeCases,
  },
}
