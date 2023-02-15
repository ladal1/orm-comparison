/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'
import { ToysProducer } from './ToysProducer'
import { House } from './House'

export class Toy extends Model {
  id!: number
  currency!: string
  toyName!: string
  price!: number
  naugthy!: string
  barcode!: string
  toysProducerId!: number
  toysProducer?: ToysProducer
  houses?: House[]

  static get tableName() {
    return 'toy'
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
    const { ToyHouse } = require('./ToyHouse')
    const { ToysProducer } = require('./ToysProducer')
    const { House } = require('./House')

    return {
      toysHouse: {
        relation: Model.HasManyRelation,
        modelClass: ToyHouse,
        join: {
          from: 'toy.id',
          to: 'toyHouse.toyId',
        },
      },
      toysProducer: {
        relation: Model.BelongsToOneRelation,
        modelClass: ToysProducer,
        join: {
          from: 'toy.producerId',
          to: 'toysProducer.id',
        },
      },
      houses: {
        relation: Model.ManyToManyRelation,
        modelClass: House,
        join: {
          from: 'toy.id',
          through: {
            from: 'toyHouse.toyId',
            to: 'toyHouse.houseId',
          },
          to: 'house.id',
        },
      },
    }
  }
}
