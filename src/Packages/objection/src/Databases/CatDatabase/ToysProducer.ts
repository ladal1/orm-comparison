/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'

export class ToysProducer extends Model {
  static get tableName() {
    return 'toysProducer'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        stockInfo: { type: 'object' },
        hqLocation: { type: 'object' },
      },
    }
  }

  static get relationMappings() {
    const { Toys } = require('./Toys')

    return {
      toys: {
        relation: Model.HasManyRelation,
        modelClass: Toys,
        join: {
          from: 'toysProducer.id',
          to: 'toys.producer_id',
        },
      },
    }
  }
}
