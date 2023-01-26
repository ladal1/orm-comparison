import Database from 'Benchmark/interfaces/DatabaseUtils'
import { Client } from 'pg'
import { redirectedFileRead } from 'Databases/utils'

export const CatDatabase: Database = {
  name: 'CatDatabase',
  setupDatabase: async (client: Client) => {
    const query = redirectedFileRead('./CatDatabase/sql/cat-database.sql')
    await client.query('BEGIN;')
    await client.query(query)
    await client.query('COMMIT;')
  },
  seedDatabase: async (client: Client) => {
    const query = redirectedFileRead('./CatDatabase/sql/data.sql')
    await client.query('BEGIN')
    await client.query(query)
    await client.query('COMMIT')
  },
  destroyDatabase: async (client: Client) => {
    const query = redirectedFileRead('./CatDatabase/sql/teardown.sql')
    await client.query('BEGIN')
    await client.query(query)
    await client.query('COMMIT')
  },
}
