import { Column, HasMany, Model, Table } from 'sequelize-typescript'
import { Toy } from './Toy'

@Table({ tableName: 'toys_producer', underscored: true, timestamps: false })
export class ToysProducer extends Model {
  @Column({ primaryKey: true, type: 'integer' })
  declare id: number

  @Column({ type: 'jsonb', allowNull: false })
  declare stockInfo: Record<string, any>

  @Column({ type: 'json', allowNull: false })
  declare hqLocation: Record<string, any>

  @HasMany(() => Toy)
  declare toys: Toy[]
}
