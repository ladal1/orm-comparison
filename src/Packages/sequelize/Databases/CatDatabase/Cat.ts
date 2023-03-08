import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from 'sequelize-typescript'
import { CatColor } from './CatColor'
import { House } from './House'
import { HouseCat } from './HouseCat'

@Table({ tableName: 'cat', underscored: true, timestamps: false })
export class Cat extends Model {
  @Column
  declare catName: string

  @Column
  declare dateOfBirth: Date

  @BelongsTo(() => CatColor)
  catColor: CatColor

  @ForeignKey(() => CatColor)
  @Column
  declare catColorId: number

  @BelongsToMany(() => House, () => HouseCat)
  houses: Array<House & { HouseCat: HouseCat }>
}
