import type { Knex } from 'knex'

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'benchmark',
    password: 'benchmark_pwd',
    database: 'benchmark',
  },
  migrations: {
    directory: './migrations',
  },
}

export default config
