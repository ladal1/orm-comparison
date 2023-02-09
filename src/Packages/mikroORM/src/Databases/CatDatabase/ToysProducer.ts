import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { Toys } from './Toys'

@Entity()
export class ToysProducer {
  @PrimaryKey()
  id!: number

  @Property({ columnType: 'jsonb' })
  stockInfo!: any

  @Property({ columnType: 'json' })
  hqLocation!: any

  @OneToMany({ entity: () => Toys, mappedBy: 'toysProducer' })
  toys = new Collection<Toys>(this)
}
