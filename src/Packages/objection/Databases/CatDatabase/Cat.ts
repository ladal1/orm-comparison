/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'objection'
import { CatColor } from './CatColor'

export class Cat extends Model {
  id!: number
  catColorId!: number
  catName!: string
  dateOfBirth!: Date
  catColor?: CatColor

  static get tableName() {
    return 'cat'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        catColorId: { type: 'integer' },
        catName: { type: 'string', maxLength: 256 },
        dateOfBirth: { type: 'date' },
      },
    }
  }

  static get relationMappings() {
    const { CatColor } = require('./CatColor')
    const { House } = require('./House')

    return {
      catColor: {
        relation: Model.BelongsToOneRelation,
        modelClass: CatColor,
        join: {
          from: 'cat.catColorId',
          to: 'catColor.id',
        },
      },
      houses: {
        relation: Model.ManyToManyRelation,
        modelClass: House,
        join: {
          from: 'cat.id',
          through: {
            from: 'houseCat.catId',
            to: 'houseCat.houseId',
          },
          to: 'house.id',
        },
      },
    }
  }
}
