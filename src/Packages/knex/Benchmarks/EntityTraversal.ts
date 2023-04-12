import { EntityTraversalBenchmark } from 'Benchmarks/EntityTraversal'
import { knexInstance } from '..'

const EntityTraversal: EntityTraversalBenchmark = {
  getCatColor: async id => {
    return knexInstance
      .select<{ hex_code: string }>('hex_code')
      .from('cat')
      .join('cat_color', 'cat.cat_color_id', 'cat_color.id')
      .join('color_hex', 'color_hex.id', 'cat_color.id')
      .where('cat.id', id)
      .first()
      .then(data => data?.hex_code ?? '')
  },
  countCatsByColor: async (hexColor: string) => {
    return knexInstance
      .count<{ count: string }>('cat.id as count')
      .from('cat')
      .join('cat_color', 'cat.cat_color_id', 'cat_color.id')
      .join('color_hex', 'color_hex.id', 'cat_color.id')
      .where('color_hex.hex_code', '=', hexColor)
      .first()
      .then(data => Number(data?.count ?? -1))
  },
  getToysAvailableToCat: async (id: number) => {
    return knexInstance
      .select<Array<{ toy_name: string }>>('toy.toy_name')
      .from('toy')
      .join('toy_house', 'toy_house.toy_id', 'toy.id')
      .join('house_cat', 'house_cat.house_id', 'toy_house.house_id')
      .where('house_cat.cat_id', '=', id)
      .then(data => data.map(d => d.toy_name))
  },
}

export default EntityTraversal
