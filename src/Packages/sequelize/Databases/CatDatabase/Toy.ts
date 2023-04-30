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
import { DECIMAL } from 'sequelize'

@Table({ tableName: 'toy', underscored: true, timestamps: false })
export class Toy extends Model {
  @Column
  declare toyName: string

  @Column
  declare barcode: string

  @Column(DECIMAL)
  declare price: number

  @Column
  declare currency: string

  @Column
  declare naughty: string

  @Column
  declare date_introduced: Date

  @HasMany(() => ToyHouse)
  declare toyHouses: ToyHouse[]

  @ForeignKey(() => ToysProducer)
  @Column
  declare toysProducerId: number

  @BelongsTo(() => ToysProducer)
  declare toysProducer: ToysProducer
}
