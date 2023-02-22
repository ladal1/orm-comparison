/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'

export class ToyHouse extends Model {
  toyId: number
  houseId: number
  amount: number

  static get tableName() {
    return 'toyHouse'
  }

  static get idColumn() {
    return ['toy_id', 'house_id']
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        toyId: { type: 'integer' },
        houseId: { type: 'integer' },
        amount: { type: 'integer' },
      },
    }
  }

  static get relationMappings() {
    const { Toy } = require('./Toy')
    const { House } = require('./House')

    return {
      toys: {
        relation: Model.BelongsToOneRelation,
        modelClass: Toy,
        join: {
          from: 'toyHouse.toyId',
          to: 'toy.id',
        },
      },
      house: {
        relation: Model.BelongsToOneRelation,
        modelClass: House,
        join: {
          from: 'toyHouse.houseId',
          to: 'house.id',
        },
      },
    }
  }
}
