import ConsoleSerializer from 'Benchmark/ResultSerializers/ConsoleSerializer'
import { BenchmarkRunner } from './Benchmark/BenchmarkRunner'
import MvpBench from './Benchmarks/SampleBenchmark'
import { KnexPackage } from './packages/knex/src'

const br = new BenchmarkRunner([KnexPackage], [], [ConsoleSerializer])

br.registerSuit(MvpBench)

br.run().then(
  () => process.exit(0),
  e => {
    console.error(e)
    process.exit(1)
  }
)
