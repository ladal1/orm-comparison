import { PackageUtils } from 'Benchmark/interfaces'
import knex, { Knex } from 'knex'
import config from './knexfile'
import MvpBench from './Benchmarks/SampleBenchmark'

let _knex: Knex

export const initialize: PackageUtils.InitializeBenchmark = async () => {
  _knex = knex(config)
}

export const destroy: PackageUtils.DestroyBenchmark = async () => {
  if (_knex !== undefined) {
    await _knex.destroy()
  }
}

export const KnexPackage = {
  name: 'Knex',
  initialize,
  destroy,
  implementations: {
    MvpBench,
  },
}

export { _knex as knexInstance }
