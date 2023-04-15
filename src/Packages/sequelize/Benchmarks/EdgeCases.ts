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
}

export default EdgeCases
