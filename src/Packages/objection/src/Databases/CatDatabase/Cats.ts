/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'

export class CatModel extends Model {
  static get tableName() {
    return 'cats'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        catColorId: { type: 'integer' },
        catName: { type: 'string', maxLength: 256 },
        dateOfBirth: { type: 'date' },
      },
    }
  }

  static get relationMappings() {
    const { CatColors } = require('./CatColors')
    const { House } = require('./House')

    return {
      catColor: {
        relation: Model.BelongsToOneRelation,
        modelClass: CatColors,
        join: {
          from: 'cats.catColorId',
          to: 'catColors.id',
        },
      },
      houses: {
        relation: Model.ManyToManyRelation,
        modelClass: House,
        join: {
          from: 'cats.id',
          through: {
            from: 'houseCats.catId',
            to: 'houseCats.houseId',
          },
          to: 'houses.id',
        },
      },
    }
  }
}
