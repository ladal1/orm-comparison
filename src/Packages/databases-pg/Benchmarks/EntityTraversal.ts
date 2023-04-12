import { EntityTraversalBenchmark } from 'Benchmarks/EntityTraversal'
import { db, dbTables } from '..'
import { sql } from '@databases/pg'

const EntityTraversal: EntityTraversalBenchmark = {
  getCatColor: async id => {
    return db
      .query(
        sql`
        SELECT color_hex.hex_code
        FROM cat
        INNER JOIN cat_color AS cc ON cat.cat_color_id=cc.id
        INNER JOIN color_hex ON color_hex.id=cc.id
        WHERE ${dbTables.cat(db).conditionToSql({ id: BigInt(id) }, 'cat')}`
      )
      .then(r => r[0].hex_code)
  },
  countCatsByColor: async hexCode => {
    return db
      .query(
        sql`SELECT
          COUNT(*) as count
        FROM
          cat
        JOIN cat_color ON cat_color.id = cat.cat_color_id
        JOIN color_hex ON color_hex.id = cat_color.id
        WHERE ${dbTables
          .color_hex(db)
          .conditionToSql({ hex_code: hexCode }, 'color_hex')}`
      )
      .then(r => Number(r[0].count))
  },
  getToysAvailableToCat: async id => {
    return db
      .query(
        sql`
    SELECT
        toy.toy_name
    FROM
        toy
    JOIN toy_house ON toy_house.toy_id = toy.id
    JOIN house ON house.id = toy_house.house_id
    JOIN house_cat ON house_cat.house_id = house.id
    WHERE ${dbTables.house_cat(db).conditionToSql({ cat_id: BigInt(id) })}`
      )
      .then(r => r.map(d => d.toy_name))
  },
}

export default EntityTraversal
