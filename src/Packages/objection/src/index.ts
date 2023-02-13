import { Model } from 'objection'
import knex from 'knex'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import EntityTraversal from './Benchmarks/EntityTraversal'

const initialize = async () => {
  const _knex = knex({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'benchmark',
      password: 'benchmark_pwd',
      database: 'benchmark',
    },
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
