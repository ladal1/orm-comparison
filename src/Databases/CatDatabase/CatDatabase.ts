import Database, { DatabaseName } from 'BenchmarkUtils/interfaces/DatabaseUtils'
import { Client } from 'pg'
import { redirectedFileRead } from 'utils'

export const CatDatabase: Database = {
  name: DatabaseName.CatDatabase,
  setupDatabase: async (client: Client) => {
    const query = redirectedFileRead(
      'src/Databases/CatDatabase/sql/cat-database.sql'
    )
    await client.query('BEGIN;')
    await client.query(query)
    await client.query('COMMIT')
  },
  seedDatabase: async (client: Client) => {
    const query = redirectedFileRead('src/Databases/CatDatabase/sql/data.sql')
    await client.query('BEGIN')
    await client.query(query)
    await client.query('COMMIT')
  },
  destroyDatabase: async (client: Client) => {
    // const query = redirectedFileRead(
    //   'src/Databases/CatDatabase/sql/teardown.sql'
    // )
    // await client.query('BEGIN')
    // await client.query(query)
    // await client.query('COMMIT')
  },
}
