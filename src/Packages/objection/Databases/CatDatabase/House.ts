/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'

export class House extends Model {
  declare id: number
  declare houseAddress: string
  declare hasDog: boolean

  static get tableName() {
    return 'house'
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
    const { Cat } = require('./Cat')
    const { ToyHouse } = require('./ToyHouse')

    return {
      cats: {
        relation: Model.ManyToManyRelation,
        modelClass: Cat,
        join: {
          from: 'house.id',
          through: {
            from: 'houseCat.houseId',
            to: 'houseCat.catId',
          },
          to: 'cat.id',
        },
      },
      toysHouse: {
        relation: Model.HasManyRelation,
        modelClass: ToyHouse,
        join: {
          from: 'house.id',
          to: 'toyHouse.houseId',
        },
      },
    }
  }
}
