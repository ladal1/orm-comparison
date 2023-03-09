import { Model, knexSnakeCaseMappers } from 'objection'
import knex from 'knex'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import EntityTraversal from './Benchmarks/EntityTraversal'
import config from 'config'

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
  },
}
