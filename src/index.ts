import ConsoleSerializer from 'BenchmarkUtils/ResultSerializers/ConsoleSerializer'
import { BenchmarkRunner } from './BenchmarkUtils/BenchmarkRunner'
import { MvpBench } from './Benchmarks/SampleBenchmark'
import { EntityTraversal } from 'Benchmarks/EntityTraversal'
import { KnexPackage } from './packages/knex/src'
import { MikroORMPackage } from './packages/mikroORM/src'

const br = new BenchmarkRunner(
  [KnexPackage, MikroORMPackage],
  [MvpBench, EntityTraversal],
  [new ConsoleSerializer()]
)

br.run().then(
  () => process.exit(0),
  e => {
    console.error(e)
    process.exit(1)
  }
)
