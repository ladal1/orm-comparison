import { Skipped } from 'BenchmarkUtils/BenchmarkRunner'
import { EntityTraversalTest } from 'Benchmarks/EntityTraversal'
import { Cats } from '../Databases/CatDatabase/Cats'

const EntityTraversal: EntityTraversalTest = {
  getCatColor: async id => {
    return Cats.query()
      .findById(id)
      .withGraphFetched('catColor.colorHex')
      .then(cat => (cat as any)?.catColor?.colorHex?.hexCode ?? '')
  },
  countCatsByColor: async (hexColor: string) => {
    throw new Skipped()
  },
  getToysAvailableToCat: async (id: number) => {
    throw new Skipped()
  },
}

export default EntityTraversal
