import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
  Unique,
} from '@mikro-orm/core'
import { ToyHouse } from './ToyHouse'
import { ToysProducer } from './ToysProducer'

@Entity()
export class Toy {
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

  @Property({ columnType: 'timestamptz', nullable: true })
  declare date_introduced: Date

  @OneToMany({ entity: () => ToyHouse, mappedBy: 'toy' })
  houseToys = new Collection<ToyHouse>(this)
}
