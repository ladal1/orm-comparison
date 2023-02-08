import { EntityTraversalTest } from 'Benchmarks/EntityTraversal'
import { Skipped } from 'BenchmarkUtils/BenchmarkRunner'

const EntityTraversal: EntityTraversalTest = {
  getCatColor: async id => {
    throw new Skipped()
  },
  countCatsByColor: async (hexColor: string) => {
    throw new Skipped()
  },
  getToysAvailableToCat: async (id: number) => {
    throw new Skipped()
  },
}

export default EntityTraversal
