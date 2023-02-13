import { Entity, ManyToOne, OptionalProps, Property } from '@mikro-orm/core'
import { House } from './House'
import { Toys } from './Toys'

@Entity()
export class ToysHouse {
  [OptionalProps]?: 'amount'

  @ManyToOne({ entity: () => Toys, onDelete: 'cascade', primary: true })
  toy!: Toys

  @ManyToOne({ entity: () => House, onDelete: 'cascade', primary: true })
  house!: House

  @Property({ default: 1 })
  amount = 1
}
