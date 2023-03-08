import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript'
import { Cat } from './Cat'
import { ColorHex } from './ColorHex'

@Table({ tableName: 'cat_color', underscored: true, timestamps: false })
export class CatColor extends Model {
  @Column
  declare colorName: string

  @HasMany(() => Cat)
  cats: Cat[]

  @HasOne(() => ColorHex)
  colorHex: ColorHex
}
