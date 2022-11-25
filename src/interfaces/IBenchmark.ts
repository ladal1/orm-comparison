import { DestroyBenchmark, InitializeBenchmark } from './initializeBenchmark'

export interface IORMBenchmark {
  initialize: InitializeBenchmark
  destroy: DestroyBenchmark
}
