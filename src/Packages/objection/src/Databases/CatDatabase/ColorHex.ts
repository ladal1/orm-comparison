/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'

export class ColorHex extends Model {
  static get tableName() {
    return 'color_hex'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['hexCode'],

      properties: {
        id: { type: 'integer' },
        hexCode: { type: 'string', maxLength: 256 },
      },
    }
  }

  static get relationMappings() {
    const { CatColor } = require('./CatColors')

    return {
      catColor: {
        relation: Model.HasOneRelation,
        modelClass: CatColor,
        join: {
          from: 'color_hex.id',
          to: 'cat_colors.id',
        },
      },
    }
  }
}
