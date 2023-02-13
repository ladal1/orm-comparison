/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'

export class CatColor extends Model {
  static get tableName() {
    return 'cat_colors'
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
    const { CatsModel } = require('./Cats')

    return {
      cats: {
        relation: Model.HasManyRelation,
        modelClass: CatsModel,
        join: {
          from: 'cat_colors.id',
          to: 'cats.cat_color_id',
        },
      },
      colorHex: {
        relation: Model.HasOneRelation,
        modelClass: ColorHex,
        join: {
          from: 'cat_colors.id',
          to: 'color_hex.id',
        },
      },
    }
  }
}
