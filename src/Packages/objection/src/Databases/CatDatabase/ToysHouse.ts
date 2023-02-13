/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'

export class ToysHouse extends Model {
  static get tableName() {
    return 'toysHouse'
  }

  static get idColumn() {
    return ['toys_id', 'house_id']
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        toys_id: { type: 'integer' },
        house_id: { type: 'integer' },
        amount: { type: 'integer' },
      },
    }
  }

  static get relationMappings() {
    const { Toys } = require('./Toys')
    const { House } = require('./House')

    return {
      toys: {
        relation: Model.BelongsToOneRelation,
        modelClass: Toys,
        join: {
          from: 'toysHouse.toys_id',
          to: 'toys.id',
        },
      },
      house: {
        relation: Model.BelongsToOneRelation,
        modelClass: House,
        join: {
          from: 'toysHouse.house_id',
          to: 'house.id',
        },
      },
    }
  }
}
