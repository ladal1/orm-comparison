import { BenchmarkRunner } from './Benchmark/BenchmarkRunner'
import MvpBench from './TestSuits/mvpBench'
import { KnexPackage } from './packages/knex/src'

const br = new BenchmarkRunner([KnexPackage])

br.registerSuit(MvpBench)

br.run()
  .then(() => console.log('done'))
  .catch(() => console.log('Meh'))
