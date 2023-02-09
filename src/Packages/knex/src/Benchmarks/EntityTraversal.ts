import { EntityTraversalTest } from 'Benchmarks/EntityTraversal'
import { knexInstance } from '..'

const EntityTraversal: EntityTraversalTest = {
  getCatColor: async id => {
    return knexInstance
      .select<{ hex_code: string }>('hex_code')
      .from('cats')
      .join('cat_colors', 'cats.cat_color_id', 'cat_colors.id')
      .join('color_hex', 'color_hex.id', 'cat_colors.id')
      .where('cats.id', id)
      .first()
      .then(data => data?.hex_code ?? '')
  },
  countCatsByColor: async (hexColor: string) => {
    return knexInstance
      .count<{ count: string }>('cats.id as count')
      .from('cats')
      .join('cat_colors', 'cats.cat_color_id', 'cat_colors.id')
      .join('color_hex', 'color_hex.id', 'cat_colors.id')
      .where('color_hex.hex_code', '=', hexColor)
      .first()
      .then(data => Number(data?.count ?? -1))
  },
  getToysAvailableToCat: async (id: number) => {
    return knexInstance
      .select('toys.toy_name')
      .from('toys')
      .join('toys_house', 'toys_house.toy_id', 'toys.id')
      .join('house_cats', 'house_cats.house_id', 'toys_house.house_id')
      .where('house_cats.cat_id', '=', id)
      .then(data => data.map(d => d.toy_name))
  },
}

export default EntityTraversal
