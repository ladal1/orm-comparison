import IORMPackage from 'Benchmark/interfaces/PackageUtils'
import { deleteLine } from '../utils/clearLine'
import { BenchmarkSuite } from './BenchmarkSuite'

export class BenchmarkRunner {
  benchmarkSuites: BenchmarkSuite[] = []
  constructor(private readonly testedPackages: IORMPackage[]) {}

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
