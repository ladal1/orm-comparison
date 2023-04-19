import { EntityTraversalBenchmark } from 'Benchmarks/EntityTraversal'
import { Cat } from '../Databases/CatDatabase/Cat'
import { Toy } from '../Databases/CatDatabase/Toy'

const EntityTraversal: EntityTraversalBenchmark = {
  getCatColor: async id => {
    return (
      Cat.query()
        .findById(id)
        //    .joinRelated('catColor.colorHex')
        .withGraphFetched('catColor.colorHex')
        .then(cat => {
          return cat?.catColor?.colorHex?.hexCode ?? ''
        })
    )
  },
  countCatsByColor: async (hexColor: string) => {
    return Cat.query()
      .count()
      .joinRelated('catColor.colorHex')
      .where('hex_code', hexColor)
      .first()
      .then((result: any) => Number(result.count))
  },
  getToysAvailableToCat: async (id: number) => {
    return Toy.query()
      .joinRelated('houses')
      .joinRelated('houses.cats')
      .where('houses:cats.id', id)
      .then(toys => toys.map(toy => toy.toyName))
  },
}

export default EntityTraversal
