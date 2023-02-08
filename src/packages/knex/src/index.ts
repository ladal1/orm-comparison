import { PackageUtils } from 'BenchmarkUtils/interfaces'
import knex, { Knex } from 'knex'
import config from './knexfile'
import MvpBench from './Benchmarks/SampleBenchmark'
import EntityTraversal from './Benchmarks/EntityTraversal'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'

let _knex: Knex

export const initialize: PackageUtils.InitializeBenchmark = async () => {
  _knex = knex(config)
}

export const destroy: PackageUtils.DestroyBenchmark = async () => {
  if (_knex !== undefined) {
    await _knex.destroy()
  }
}

export const KnexPackage: IORMPackage = {
  name: 'Knex',
  initialize,
  destroy,
  implementations: {
    MvpBench,
    EntityTraversal,
  },
}

export { _knex as knexInstance }
