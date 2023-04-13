import { BenchmarkRunner } from './BenchmarkRunner'
import { BenchmarkSuite } from './BenchmarkSuite'

class Skipped extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'Skipped'
  }
}

class NotSupported extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'The operation is not supported'
  }
}

export { BenchmarkRunner, BenchmarkSuite, Skipped, NotSupported }
