/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'

export class ColorHex extends Model {
  id!: number
  hexCode!: string

  static get tableName() {
    return 'colorHex'
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
          from: 'colorHex.id',
          to: 'catColor.id',
        },
      },
    }
  }
}
