import {
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript'
import { Cat } from './Cat'
import { ToyHouse } from './ToyHouse'
import { HouseCat } from './HouseCat'

@Table({ tableName: 'house', underscored: true, timestamps: false })
export class House extends Model {
  @Column
  declare houseAddress: string

  @Column
  declare hasDog: boolean

  @BelongsToMany(() => Cat, () => HouseCat)
  cats: Array<Cat & { HouseCat: HouseCat }>

  @HasMany(() => ToyHouse)
  toyHouses: ToyHouse[]
}
