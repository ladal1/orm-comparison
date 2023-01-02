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

  public registerSuit(benchmark: BenchmarkSuite) {
    this.benchmarkSuites.push(benchmark)
  }

  async runSuite() {
    for (const benchmark of this.testedPackages) {
      performance.now()
      console.log('Testing package: ', benchmark.name)
      await benchmark.initialize()
      await benchmark.destroy()
      deleteLine(process.stdout)
      console.log('Finished testing package: ', benchmark.name)
    }
  }

  async run() {
    await this.utilConnection.connect()
    for (const benchmark of this.benchmarkSuites) {
      console.log('Running benchmark: ', benchmark.getName())
      await benchmark.prepare(this.utilConnection)
      await benchmark.run()
      await benchmark.teardown(this.utilConnection)
      console.log('Finished benchmark: ', benchmark.getName())
    }
    await this.utilConnection.end()
  }
}
