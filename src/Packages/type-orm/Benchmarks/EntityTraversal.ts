import { EntityTraversalBenchmark } from 'Benchmarks/EntityTraversal'
import { BenchDataSource } from '..'
import { Cat } from '../Databases/CatDatabase/Cat'
import { Toy } from '../Databases/CatDatabase/Toy'

const EntityTraversal: EntityTraversalBenchmark = {
  getCatColor: async id => {
    return BenchDataSource.getRepository(Cat)
      .findOne({
        where: { id: id.toString() },
        relations: {
          catColor: {
            colorHex: true,
          },
        },
      })
      .then(cat => cat?.catColor.colorHex.hexCode ?? '')
  },
  countCatsByColor: async hexColor => {
    return BenchDataSource.getRepository(Cat).count({
      where: {
        catColor: {
          colorHex: {
            hexCode: hexColor,
          },
        },
      },
    })
  },
  getToysAvailableToCat: async id => {
    return BenchDataSource.getRepository(Toy)
      .find({
        where: {
          toyHouses: {
            house: {
              cats: {
                id: id.toString(),
              },
            },
          },
        },
      })
      .then(toys => toys.map(toy => toy.toyName))
  },
}

export default EntityTraversal
