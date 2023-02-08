import pg from 'pg'

export default interface Database {
  name: string
  setupDatabase: (client: pg.Client) => Promise<void>
  seedDatabase: (client: pg.Client) => Promise<void>
  destroyDatabase: (client: pg.Client) => Promise<void>
}
