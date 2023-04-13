import { Model, knexSnakeCaseMappers } from 'objection'
import knex from 'knex'
import config from 'config'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import EntityTraversal from './Benchmarks/EntityTraversal'
import EdgeCases from './Benchmarks/EdgeCases'
import SpecialSQLActions from './Benchmarks/SpecialSQLActions'

const initialize = async () => {
  const _knex = knex({
    client: 'pg',
    connection: config.database,
    ...knexSnakeCaseMappers(),
  })

  Model.knex(_knex)
}

const destroy = async () => {
  await Model.knex().destroy()
}

export const ObjectionPackage: IORMPackage = {
  name: 'Objection.js',
  initialize,
  destroy,
  implementations: {
    EntityTraversal,
    EdgeCases,
    SpecialSQLActions,
  },
}
