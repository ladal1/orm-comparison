import { Entity, ManyToOne, OptionalProps, Property } from '@mikro-orm/core'
import { House } from './House'
import { Toy } from './Toy'

@Entity()
export class ToyHouse {
  [OptionalProps]?: 'amount'

  @ManyToOne({ entity: () => Toy, onDelete: 'cascade', primary: true })
  toy!: Toy

  @ManyToOne({ entity: () => House, onDelete: 'cascade', primary: true })
  house!: House

  @Property({ default: 1 })
  amount = 1
}
