import Database from 'Benchmark/interfaces/DatabaseUtils'
import { Client } from 'pg'
import * as fs from 'fs'

export const CatDatabase: Database = {
  name: 'CatDatabase',
  setupDatabase: async (client: Client) => {
    const query = fs.readFileSync('./sql/cat-database.sql', 'utf8')
    await client.query('BEGIN')
    await client.query(query)
    await client.query('COMMIT')
  },
  seedDatabase: async (client: Client) => {
    const query = fs.readFileSync('./sql/data.sql', 'utf8')
    await client.query('BEGIN')
    await client.query(query)
    await client.query('COMMIT')
  },
  destroyDatabase: async (client: Client) => {
    const query = fs.readFileSync('./sql/teardown.sql', 'utf8')
    await client.query('BEGIN')
    await client.query(query)
    await client.query('COMMIT')
  },
}
