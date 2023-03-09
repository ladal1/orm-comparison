import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import path from 'path'
import { DataSource } from 'typeorm'
import EntityTraversal from './Benchmarks/EntityTraversal'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export let BenchDataSource: DataSource

const initialize = async (database: string) => {
  BenchDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'benchmark',
    password: 'benchmark_pwd',
    database: 'benchmark',
    synchronize: false,
    logging: false,
    entities: [path.join(__dirname, 'Databases', database, '*.js')],
    namingStrategy: new SnakeNamingStrategy(),
  })
  await BenchDataSource.initialize()
}

const destroy = async () => {
  await BenchDataSource.destroy()
}

export const TypeORMPackage: IORMPackage = {
  name: 'TypeORM',
  initialize,
  destroy,
  implementations: {
    EntityTraversal,
  },
}
