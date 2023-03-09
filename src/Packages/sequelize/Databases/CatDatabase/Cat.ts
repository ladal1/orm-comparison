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
  declare catColor: CatColor

  @ForeignKey(() => CatColor)
  @Column
  declare catColorId: number

  @BelongsToMany(() => House, () => HouseCat)
  declare houses: Array<House & { HouseCat: HouseCat }>
}
