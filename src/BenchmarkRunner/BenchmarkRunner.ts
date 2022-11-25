import { IORMBenchmark } from 'interfaces/IBenchmark'
import { BenchmarkSuite } from './BenchmarkSuite'

export class BenchmarkRunner {
  benchmarkSuites: BenchmarkSuite[] = []
  constructor(private readonly testedPackages: IORMBenchmark[]) {}

  async run() {
    for (const benchmark of this.testedPackages) {
      await benchmark.initialize()
      await benchmark.destroy()
    }
  }

  public registerSuit(benchmark: BenchmarkSuite) {
    this.benchmarkSuites.push(benchmark)
  }
}
