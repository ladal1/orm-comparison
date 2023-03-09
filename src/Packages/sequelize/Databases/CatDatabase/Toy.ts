import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript'
import { ToyHouse } from './ToyHouse'
import { ToysProducer } from './ToysProducer'

@Table({ tableName: 'toy', underscored: true, timestamps: false })
export class Toy extends Model {
  @Column
  declare toyName: string

  @Column
  declare barcode: string

  @Column
  declare price: number

  @Column
  declare currency: string

  @Column
  declare naughty: string

  @HasMany(() => ToyHouse)
  declare toyHouses: ToyHouse[]

  @ForeignKey(() => ToysProducer)
  @Column
  declare toysProducerId: number

  @BelongsTo(() => ToysProducer)
  declare toysProducer: ToysProducer
}
