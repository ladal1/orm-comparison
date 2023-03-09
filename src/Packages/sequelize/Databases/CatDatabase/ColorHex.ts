import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'
import { CatColor } from './CatColor'

@Table({ tableName: 'color_hex', underscored: true, timestamps: false })
export class ColorHex extends Model {
  @PrimaryKey
  @ForeignKey(() => CatColor)
  @Column
  declare id: number

  @BelongsTo(() => CatColor)
  declare catColor: CatColor

  @Column
  declare hexCode: string
}
