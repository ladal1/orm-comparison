import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import path from 'path'
import config from 'config'
import { Sequelize } from 'sequelize-typescript'
import EntityTraversal from './Benchmarks/EntityTraversal'
import SpecialSQLActions from './Benchmarks/SpecialSQLActions'
import EdgeCases from './Benchmarks/EdgeCases'
import BulkOperations from './Benchmarks/BulkOperations'

let _sequelize: Sequelize | null = null

const initialize = async (database: string) => {
  _sequelize = new Sequelize({
    dialect: 'postgres',
    models: [path.join(__dirname, 'Databases', database)],
    logging: false,
    host: config.database.host,
    port: config.database.port,
    username: config.database.user,
    password: config.database.password,
    database: config.database.name,
  })
  await _sequelize.authenticate()
}

const getSequelize = () => {
  if (_sequelize === null) {
    throw new Error('Sequelize is not initialized')
  }
  return _sequelize
}

const destroy = async () => {
  if (_sequelize !== null) {
    await _sequelize.close()
  }
}

export const SequelizePackage: IORMPackage = {
  name: 'Sequelize',
  initialize,
  destroy,
  implementations: {
    EntityTraversal,
    SpecialSQLActions,
    EdgeCases,
    BulkOperations,
  },
}

export { getSequelize }
