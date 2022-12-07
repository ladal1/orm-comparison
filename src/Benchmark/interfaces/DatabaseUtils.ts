export default interface Database {
  setupDatabase: () => Promise<void>
  destroyDatabase: () => Promise<void>
}
