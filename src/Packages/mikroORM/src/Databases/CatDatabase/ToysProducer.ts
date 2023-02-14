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

  @Property({ columnType: 'jsonb' })
  stockInfo!: any

  @Property({ columnType: 'json' })
  hqLocation!: any

  @OneToMany({ entity: () => Toy, mappedBy: 'toysProducer' })
  toysProduced = new Collection<Toy>(this)
}
