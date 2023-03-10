import { EntityTraversalBenchmark } from 'Benchmarks/EntityTraversal'
import { Cat } from '../Databases/CatDatabase/Cat'
import { CatColor } from '../Databases/CatDatabase/CatColor'
import { ColorHex } from '../Databases/CatDatabase/ColorHex'
import { Toy } from '../Databases/CatDatabase/Toy'
import { ToyHouse } from '../Databases/CatDatabase/ToyHouse'
import { House } from '../Databases/CatDatabase/House'

const EntityTraversal: EntityTraversalBenchmark = {
  getCatColor: async id => {
    return Cat.findOne({
      where: { id },
      include: [{ model: CatColor, include: [ColorHex] }],
    }).then(cat =>
      cat
        ?.getDataValue('catColor')
        .getDataValue('colorHex')
        .getDataValue('hexCode')
    )
  },
  countCatsByColor: async hexColor => {
    return Cat.count({
      where: {
        '$catColor.colorHex.hex_code$': hexColor,
      },
      include: [{ model: CatColor, include: [ColorHex] }],
    })
  },
  getToysAvailableToCat: async id => {
    return Toy.findAll({
      where: {
        '$toyHouses.house.cats.id$': id,
      },
      include: [
        {
          model: ToyHouse,
          include: [
            {
              model: House,
              include: [Cat],
            },
          ],
        },
      ],
    }).then(toys => toys.map(toy => toy.getDataValue('toyName')))
  },
}

export default EntityTraversal
