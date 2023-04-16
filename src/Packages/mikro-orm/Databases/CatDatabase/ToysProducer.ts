import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { Toy } from './Toy'

@Entity()
export class ToysProducer {
  @PrimaryKey()
  id!: number

  @Property({ type: 'jsonb' })
  stockInfo: any

  @Property({ type: 'json' })
  hqLocation: any

  @OneToMany({ entity: () => Toy, mappedBy: 'toysProducer' })
  toysProduced = new Collection<Toy>(this)
}
