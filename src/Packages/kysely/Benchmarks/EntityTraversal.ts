/* eslint-disable sonarjs/no-duplicate-string */
import { EntityTraversalBenchmark } from 'Benchmarks/EntityTraversal'
import { kyselyInstance } from '..'

const EntityTraversal: EntityTraversalBenchmark = {
  getCatColor: async id => {
    return kyselyInstance
      .selectFrom('cat')
      .innerJoin('cat_color', 'cat.cat_color_id', 'cat_color.id')
      .innerJoin('color_hex', 'color_hex.id', 'cat_color.id')
      .select('color_hex.hex_code')
      .where('cat.id', '=', BigInt(id))
      .executeTakeFirst()
      .then(data => data?.hex_code ?? '')
  },
  countCatsByColor: async hexColor => {
    return kyselyInstance
      .selectFrom('cat')
      .select(kyselyInstance.fn.count('cat.id').as('cat_count'))
      .innerJoin('cat_color', 'cat.cat_color_id', 'cat_color.id')
      .innerJoin('color_hex', 'color_hex.id', 'cat_color.id')
      .where('color_hex.hex_code', '=', hexColor)
      .executeTakeFirst()
      .then(data => Number(data?.cat_count ?? -1))
  },
  getToysAvailableToCat: async id => {
    return kyselyInstance
      .selectFrom('toy')
      .innerJoin('toy_house', 'toy_house.toy_id', 'toy.id')
      .innerJoin('house_cat', 'house_cat.house_id', 'toy_house.house_id')
      .select('toy.toy_name')
      .where('house_cat.cat_id', '=', id)
      .execute()
      .then(data => data.map(d => d.toy_name))
  },
}

export default EntityTraversal
