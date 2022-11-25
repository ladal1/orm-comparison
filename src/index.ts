import { BenchmarkRunner } from 'BenchmarkRunner/BenchmarkRunner'
import MvpBench from 'Benchmarks/mvpBench'
import { KnexPackage } from './knex/src'

const br = new BenchmarkRunner([KnexPackage])

br.registerSuit(MvpBench)
