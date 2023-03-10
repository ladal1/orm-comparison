import { EntityTraversalBenchmark } from 'Benchmarks/EntityTraversal'
import { clients } from '..'

const EntityTraversal: EntityTraversalBenchmark = {
  getCatColor: async id => {
    return clients.CatDatabase.cat
      .findUnique({
        where: {
          id,
        },
        include: {
          cat_color: {
            include: {
              color_hex: true,
            },
          },
        },
      })
      .then(cat => cat?.cat_color?.color_hex?.hex_code ?? '')
  },
  countCatsByColor: async (hexColor: string) => {
    return clients.CatDatabase.cat.count({
      where: {
        cat_color: {
          color_hex: {
            hex_code: hexColor,
          },
        },
      },
    })
  },
  getToysAvailableToCat: async (id: number) => {
    return clients.CatDatabase.toy
      .findMany({
        where: {
          toy_house: {
            some: {
              house: {
                house_cat: {
                  some: {
                    cat: {
                      id,
                    },
                  },
                },
              },
            },
          },
        },
      })
      .then(toys => toys.map(toy => toy.toy_name))
  },
}

export default EntityTraversal
