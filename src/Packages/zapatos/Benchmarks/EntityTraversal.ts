import * as db from 'zapatos/db'
import type * as schema from 'zapatos/schema'
import { pgPool } from '..'
import { EntityTraversalBenchmark } from 'Benchmarks/EntityTraversal'

const EntityTraversal: EntityTraversalBenchmark = {
  getCatColor: async id => {
    return db
      .selectOne('cat', db.all, {
        lateral: {
          cat_color: db.selectExactlyOne(
            'cat_color',
            {
              id: db.parent('cat_color_id'),
            },
            {
              lateral: {
                color_hex: db.selectExactlyOne('color_hex', {
                  id: db.parent('id'),
                }),
              },
            }
          ),
        },
      })
      .run(pgPool)
      .then(cat => cat?.cat_color.color_hex.hex_code ?? '')
  },
  countCatsByColor: async hexColor => {
    type selectedTables =
      | schema.cat.SQL
      | schema.cat_color.SQL
      | schema.color_hex.SQL
    return db.sql<selectedTables, Array<{ count: string }>>`SELECT
    COUNT(*)
  FROM
      ${'cat'}
      JOIN ${'cat_color'} ON cat_color.id = ${'cat'}.${'cat_color_id'}
      JOIN ${'color_hex'} ON ${'color_hex'}.${'id'} = ${'cat_color'}.${'id'}
  WHERE
      ${'color_hex'}.${'hex_code'} = ${db.param(hexColor)};`
      .run(pgPool)
      .then(rows => Number(rows[0].count))
  },
  getToysAvailableToCat: async id => {
    const toyNameColumn = ['toy_name'] as const
    type toyName = schema.toy.OnlyCols<typeof toyNameColumn>
    type selectedTables =
      | schema.toy.SQL
      | schema.toy_house.SQL
      | schema.house.SQL
      | schema.house_cat.SQL

    return db.sql<selectedTables, toyName[]>`
    SELECT
      ${'toy'}.${'toy_name'}
    FROM
      ${'toy'}
      JOIN ${'toy_house'} ON ${'toy_house'}.${'toy_id'} = ${'toy'}.${'id'}
      JOIN ${'house'} ON house.id = ${'toy_house'}.${'house_id'}
      JOIN ${'house_cat'} ON ${'house_cat'}.${'house_id'} = ${'house'}.${'id'}
    WHERE
      house_cat.cat_id = ${db.param(id)};`
      .run(pgPool)
      .then(toys => toys.map(toy => toy.toy_name))
  },
}

export default EntityTraversal
