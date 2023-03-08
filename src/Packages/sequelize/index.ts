import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import EntityTraversal from './Benchmarks/EntityTraversal'

let _sequelize: Sequelize | null = null

const initialize = async (database: string) => {
  _sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'benchmark',
    password: 'benchmark_pwd',
    database: 'benchmark',
    models: [path.join(__dirname, 'Databases', database)],
    logging: false,
  })
  await _sequelize.authenticate()
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
  },
}

export { _sequelize as sequelizeInstance }
