import { Model } from 'objection'
import knex from 'knex'

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
