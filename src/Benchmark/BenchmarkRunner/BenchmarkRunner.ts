import { IORMPackage } from '../interfaces'
import clearLine from '../utils/clearLine'
import { BenchmarkSuite } from './BenchmarkSuite'

export class BenchmarkRunner {
  benchmarkSuites: BenchmarkSuite[] = []
  constructor(private readonly testedPackages: IORMPackage[]) {}

  async run() {
    for (const benchmark of this.testedPackages) {
      console.log('Testing package: ', benchmark.name)
      await benchmark.initialize()
      await benchmark.destroy()
      clearLine(process.stdout)
      console.log('Finished testing package: ', benchmark.name)
    }
  }

  public registerSuit(benchmark: BenchmarkSuite) {
    this.benchmarkSuites.push(benchmark)
  }
}
