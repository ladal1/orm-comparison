import { EntityTraversalTest } from 'Benchmarks/EntityTraversal'
import { getClient } from '../..'
import {
  countCatsByColor,
  getCatColorById,
  getToysAvailableToCat,
} from './EntityTraversal.queries'

const EntityTraversal: EntityTraversalTest = {
  getCatColor: async catId => {
    return getCatColorById
      .run({ catId }, getClient())
      .then(result => result[0].hex_code)
  },
  countCatsByColor: async hexCode => {
    return countCatsByColor
      .run({ hexCode }, getClient())
      .then(result => Number(result[0].count))
  },
  getToysAvailableToCat: async catId => {
    return getToysAvailableToCat
      .run({ catId }, getClient())
      .then(result => result.map(r => r.toy_name))
  },
}

export default EntityTraversal
