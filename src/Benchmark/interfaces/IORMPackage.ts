import { DestroyBenchmark, InitializeBenchmark } from './PackageUtils'

export default interface IORMPackage {
  name: string
  initialize: InitializeBenchmark
  destroy: DestroyBenchmark
}
