import { Column, HasMany, Model, Table } from 'sequelize-typescript'
import { Toy } from './Toy'

@Table({ tableName: 'toys_producer', underscored: true, timestamps: false })
export class ToysProducer extends Model {
  @Column('jsonb')
  stockInfo: Record<string, any>

  @Column('json')
  hqLocation: Record<string, any>

  @HasMany(() => Toy)
  declare toys: Toy[]
}
