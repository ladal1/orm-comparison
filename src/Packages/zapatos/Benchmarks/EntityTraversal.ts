import { Skipped } from 'BenchmarkUtils/BenchmarkRunner'

const EntityTraversal: EntityTraversalTest = {
  getCatColor: async id => {
    throw new Skipped()
  },
  countCatsByColor: async hexColor => {
    throw new Skipped()
  },
  getToysAvailableToCat: async id => {
    throw new Skipped()
  },
}

export default EntityTraversal
