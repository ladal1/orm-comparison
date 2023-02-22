import { Client } from 'pg'
import EntityTraversal from './Benchmarks/EntityTraversal'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'

let _client: Client

export const getClient = () => {
  return _client
}

const initialize = async () => {
  _client = new Client({
    host: 'localhost',
    user: 'benchmark',
    password: 'benchmark_pwd',
    database: 'benchmark',
  })
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
  },
}

export { PgTypedPackage }
