import { EntityTraversalTest } from 'Benchmarks/EntityTraversal'
import { knexInstance } from '..'

const KnexEntityTraversal: EntityTraversalTest = {
  getCatColor: async () => {
    return knexInstance.select('hex_color').from('cats')
  },
  countCatsByColor: async (hexColor: string) => {
    throw new Error('Function not implemented.')
  },
  getToysAvailableToCat: async (id: number) => {
    throw new Error('Function not implemented.')
  },
}

export default KnexEntityTraversal
