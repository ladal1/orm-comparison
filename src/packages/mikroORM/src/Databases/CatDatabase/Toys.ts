import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
  Unique,
} from '@mikro-orm/core'
import { ToysHouse } from './ToysHouse'
import { ToysProducer } from './ToysProducer'

@Entity()
export class Toys {
  @PrimaryKey()
  id!: number

  @ManyToOne({
    entity: () => ToysProducer,
    onDelete: 'cascade',
    nullable: true,
  })
  toysProducer?: ToysProducer

  @Property({ length: 256 })
  toyName!: string

  @Unique({ name: 'uc_toys_barcode' })
  @Property({ length: 256 })
  barcode!: string

  @Property({ columnType: 'numeric' })
  price!: string

  @Property()
  currency!: string

  @Property({ length: 256, nullable: true })
  naughty?: string

  @OneToMany({ entity: () => ToysHouse, mappedBy: 'toy' })
  houseToys = new Collection<ToysHouse>(this)
}
