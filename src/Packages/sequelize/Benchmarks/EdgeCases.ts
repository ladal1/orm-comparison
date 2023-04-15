import { EdgeCasesBenchmark } from 'Benchmarks/EdgeCases'
import { Op } from 'sequelize'
import { Cat } from '../Databases/CatDatabase/Cat'

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
}

export default EdgeCases
