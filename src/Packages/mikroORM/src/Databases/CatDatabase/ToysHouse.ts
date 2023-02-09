import { Entity, ManyToOne, PrimaryKey } from '@mikro-orm/core'
import { House } from './House'
import { Toys } from './Toys'

@Entity()
export class ToysHouse {
  @PrimaryKey()
  id!: number

  @ManyToOne({ entity: () => Toys, onDelete: 'cascade' })
  toy!: Toys

  @ManyToOne({ entity: () => House, onDelete: 'cascade' })
  house!: House
}
