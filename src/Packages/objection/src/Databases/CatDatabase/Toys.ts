/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'

export class Toys extends Model {
  static get tableName() {
    return 'toys'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['currency', 'toyName', 'price', 'barcode'],

      properties: {
        id: { type: 'integer' },
        currency: { type: 'string', maxLength: 256 },
        toyName: { type: 'string', maxLength: 256 },
        price: { type: 'integer' },
        naugthy: { type: 'string' },
        barcode: { type: 'string' },
      },
    }
  }

  static get relationMappings() {
    const { ToysHouse } = require('./ToysHouse')
    const { ToysProducer } = require('./ToysProducer')

    return {
      toysHouse: {
        relation: Model.HasManyRelation,
        modelClass: ToysHouse,
        join: {
          from: 'toys.id',
          to: 'toysHouse.toys_id',
        },
      },
      toysProducer: {
        relation: Model.BelongsToOneRelation,
        modelClass: ToysProducer,
        join: {
          from: 'toys.producer_id',
          to: 'toysProducer.id',
        },
      },
    }
  }
}
