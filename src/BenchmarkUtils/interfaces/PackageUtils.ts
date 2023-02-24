import { TestTemplate } from 'BenchmarkUtils/BenchmarkRunner/BenchmarkSuite'
import { DatabaseName } from './DatabaseUtils'

// Initialize the benchmark, setup connection to the database
export type InitializePackage = (databaseName: DatabaseName) => Promise<void>

// Clean workplace, close connection to the database
export type DestroyPackage = (databaseName: DatabaseName) => Promise<void>

export default interface IORMPackage {
  name: string
  initialize: InitializePackage
  destroy: DestroyPackage
  implementations: Record<string, TestTemplate>
}
