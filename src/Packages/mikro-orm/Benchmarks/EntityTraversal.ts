import { EntityTraversalBenchmark } from 'Benchmarks/EntityTraversal'
import { getEntityManager } from '..'
import { Cat } from '../Databases/CatDatabase/Cat'
import { Toy } from '../Databases/CatDatabase/Toy'

const EntityTraversal: EntityTraversalBenchmark = {
  getCatColor: async id => {
    return getEntityManager('EntityTraversal')
      .findOneOrFail(
        Cat,
        { id: id.toString() },
        { populate: ['catColor.colorHex'] }
      )
      .then(cat => cat.catColor?.colorHex?.hexCode ?? '')
  },
  countCatsByColor: async (hexColor: string) => {
    return getEntityManager('EntityTraversal').count(Cat, {
      catColor: { colorHex: { hexCode: hexColor } },
    })
  },
  getToysAvailableToCat: async (id: number) => {
    return getEntityManager('EntityTraversal')
      .find(Toy, { houseToys: { house: { cats: { id: id.toString() } } } })
      .then(toys => toys.map(toy => toy.toyName))
  },
}

export default EntityTraversal
