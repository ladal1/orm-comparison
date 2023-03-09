import { EntityTraversalTest } from 'Benchmarks/EntityTraversal'
import { BenchDataSource } from '..'
import { Cat } from '../Databases/CatDatabase/Cat'
import { Toy } from '../Databases/CatDatabase/Toy'

const EntityTraversal: EntityTraversalTest = {
  getCatColor: async id => {
    return BenchDataSource.getRepository(Cat)
      .findOne({
        where: { id },
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
                id,
              },
            },
          },
        },
      })
      .then(toys => toys.map(toy => toy.toyName))
  },
}

export default EntityTraversal
