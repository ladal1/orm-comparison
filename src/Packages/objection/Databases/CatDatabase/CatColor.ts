/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'
import { ColorHex } from './ColorHex'
import { Cat } from './Cat'

export class CatColor extends Model {
  declare id: number
  declare name: string
  colorHex?: ColorHex
  cats?: Cat[]

  static get tableName() {
    return 'catColor'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 256 },
      },
    }
  }

  static get relationMappings() {
    const { ColorHex } = require('./ColorHex')
    const { Cat } = require('./Cat')

    return {
      cats: {
        relation: Model.HasManyRelation,
        modelClass: Cat,
        join: {
          from: 'catColor.id',
          to: 'cat.catColorId',
        },
      },
      colorHex: {
        relation: Model.HasOneRelation,
        modelClass: ColorHex,
        join: {
          from: 'catColor.id',
          to: 'colorHex.id',
        },
      },
    }
  }
}
