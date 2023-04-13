import { Client } from 'pg'
import config from 'config'
import EntityTraversal from './Benchmarks/EntityTraversal'
import SpecialSQLActions from './Benchmarks/SpecialSQLActions'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import EdgeCases from './Benchmarks/EdgeCases'

let _client: Client

export const getClient = () => {
  return _client
}

const initialize = async () => {
  _client = new Client(config.database)
  await _client.connect()
}

const destroy = async () => {
  await _client.end()
}

const PgTypedPackage: IORMPackage = {
  name: 'PgTyped',
  initialize,
  destroy,
  implementations: {
    EntityTraversal,
    SpecialSQLActions,
    EdgeCases,
  },
}

export { PgTypedPackage }
