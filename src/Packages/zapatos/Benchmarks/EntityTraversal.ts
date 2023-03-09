import { Skipped } from 'BenchmarkUtils/BenchmarkRunner'
import * as db from 'zapatos/db'
import { pgPool } from '..'
import { EntityTraversalTest } from 'Benchmarks/EntityTraversal'

const EntityTraversal: EntityTraversalTest = {
  getCatColor: async id => {
    const joinedCat = await db
      .select('cat', db.all, {
        lateral: {
          cat_color: db.selectExactlyOne('cat_color', {
            id: db.parent('cat_color_id'),
          }),
        },
      })
      .run(pgPool)
    console.log(joinedCat)
    throw new Skipped()
  },
  countCatsByColor: async hexColor => {
    throw new Skipped()
  },
  getToysAvailableToCat: async id => {
    throw new Skipped()
  },
}

export default EntityTraversal
