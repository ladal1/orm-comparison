import {
  Model,
  Column,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'
import { Cat } from './Cat'
import { House } from './House'

@Table({ tableName: 'house_cat', underscored: true, timestamps: false })
export class HouseCat extends Model {
  @PrimaryKey
  @ForeignKey(() => House)
  @Column
  declare houseId: number

  @PrimaryKey
  @ForeignKey(() => Cat)
  @Column
  declare catId: number
}
