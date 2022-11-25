import {
  DestroyBenchmark,
  InitializeBenchmark,
} from 'interfaces/initializeBenchmark'
import knex, { Knex } from 'knex'
import config from './knexfile'

let _knex: Knex

export const initialize: InitializeBenchmark = async () => {
  _knex = knex(config)
}

export const destroy: DestroyBenchmark = async () => {
  if (_knex !== undefined) {
    await _knex.destroy()
  }
}

export const KnexPackage = {
  initialize,
  destroy,
}

export { _knex as knexInstance }
