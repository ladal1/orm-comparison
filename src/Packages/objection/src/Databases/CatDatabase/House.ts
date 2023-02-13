/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'

export class House extends Model {
  static get tableName() {
    return 'houses'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        houseAddress: { type: 'string', maxLength: 256 },
        hasDog: { type: 'boolean' },
      },
    }
  }

  static get relationMappings() {
    const { CatsModel } = require('./Cats')
    const { ToysHouse } = require('./ToysHouse')

    return {
      cats: {
        relation: Model.ManyToManyRelation,
        modelClass: CatsModel,
        join: {
          from: 'houses.id',
          through: {
            from: 'houseCats.houseId',
            to: 'houseCats.catId',
          },
          to: 'cats.id',
        },
      },
      toysHouse: {
        relation: Model.HasManyRelation,
        modelClass: ToysHouse,
        join: {
          from: 'houses.id',
          to: 'toysHouse.house_id',
        },
      },
    }
  }
}
