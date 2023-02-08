import { EntityTraversalTest } from 'Benchmarks/EntityTraversal'
import { getEntityManager } from '..'
import { Cats } from '../Databases/CatDatabase/Cats'
import { Toys } from '../Databases/CatDatabase/Toys'

const EntityTraversal: EntityTraversalTest = {
  getCatColor: async id => {
    return getEntityManager('EntityTraversal')
      .findOneOrFail(Cats, id, { populate: ['catColor.colorHex'] })
      .then(cat => cat.catColor?.colorHex?.hexCode ?? '')
  },
  countCatsByColor: async (hexColor: string) => {
    return getEntityManager('EntityTraversal').count(Cats, {
      catColor: { colorHex: { hexCode: hexColor } },
    })
  },
  getToysAvailableToCat: async (id: number) => {
    return getEntityManager('EntityTraversal')
      .find(Toys, { houseToys: { house: { cats: { id } } } })
      .then(toys => toys.map(toy => toy.toyName))
  },
}

export default EntityTraversal
