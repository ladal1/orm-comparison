import IORMPackage from 'Benchmark/interfaces/PackageUtils'
import { Client } from 'pg'
import { deleteLine } from '../utils/clearLine'
import { BenchmarkSuite } from './BenchmarkSuite'

export class BenchmarkRunner {
  private readonly utilConnection: Client

  constructor(
    private readonly testedPackages: IORMPackage[] = [],
    private readonly benchmarkSuites: BenchmarkSuite[] = []
  ) {
    this.utilConnection = new Client({
      user: 'benchmark',
      host: 'localhost',
      password: 'benchmark_pwd',
      application_name: 'BenchmarkRunner',
    })
  }

  async run() {
    for (const benchmark of this.testedPackages) {
      performance.now()
      console.log('Testing package: ', benchmark.name)
      await benchmark.initialize()
      await benchmark.destroy()
      deleteLine(process.stdout)
      console.log('Finished testing package: ', benchmark.name)
    }
  }

  public registerSuit(benchmark: BenchmarkSuite) {
    this.benchmarkSuites.push(benchmark)
  }
}
