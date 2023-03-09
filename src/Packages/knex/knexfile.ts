import type { Knex } from 'knex'
import defaultConfig from 'config'

const config: Knex.Config = {
  client: 'pg',
  connection: defaultConfig.database.url,
  migrations: {
    directory: './migrations',
  },
}

export default config
