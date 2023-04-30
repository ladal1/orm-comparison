import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { Op } from 'sequelize'
import { Cat } from '../Databases/CatDatabase/Cat'
import { Toy } from '../Databases/CatDatabase/Toy'

const EdgeCases: EdgeCasesBenchmark = {
  sqlInjection: async query =>
    Cat.count({
      where: {
        catName: {
          [Op.like]: `%${query}%`,
        },
      },
    }),
  bigIntColumn: async (name: string) => {
    return Cat.findOne({
      where: {
        cat_name: name,
      },
    }).then(data => BigInt(data?.id ?? 0))
  },
  maxQuery: async () => {
    return Toy.max('price').then(data => Number(data ?? 0))
  },
}

export default EdgeCases
