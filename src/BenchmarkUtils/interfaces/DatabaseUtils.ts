import pg from 'pg'

export enum DatabaseName {
  CatDatabase = 'CatDatabase',
}

export default interface Database {
  name: DatabaseName
  setupDatabase: (client: pg.Client) => Promise<void>
  seedDatabase: (client: pg.Client) => Promise<void>
  destroyDatabase: (client: pg.Client) => Promise<void>
}
