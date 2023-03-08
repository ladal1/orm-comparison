import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'
import { House } from './House'
import { Toy } from './Toy'

@Table({ tableName: 'toy_house', underscored: true, timestamps: false })
export class ToyHouse extends Model {
  @Column
  declare amount: number

  @PrimaryKey
  @ForeignKey(() => Toy)
  @Column
  declare toyId: number

  @PrimaryKey
  @ForeignKey(() => House)
  @Column
  declare houseId: number

  @BelongsTo(() => Toy)
  toy: Toy

  @BelongsTo(() => House)
  house: House
}
