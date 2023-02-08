import { BenchmarkRunner } from './BenchmarkRunner'
import { BenchmarkSuite } from './BenchmarkSuite'

class Skipped extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'Skipped'
  }
}

export { BenchmarkRunner, BenchmarkSuite, Skipped }
