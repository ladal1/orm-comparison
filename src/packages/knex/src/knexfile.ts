import type { Knex } from 'knex'

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'cat_database',
    password: 'cat_database',
    database: 'cat_database',
  },
  migrations: {
    directory: './migrations',
  },
}

export default config
