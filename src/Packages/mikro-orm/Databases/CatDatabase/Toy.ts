import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  OptionalProps,
  PrimaryKey,
  Property,
  Unique,
} from '@mikro-orm/core'
import { ToyHouse } from './ToyHouse'
import { ToysProducer } from './ToysProducer'

@Entity()
export class Toy {
  [OptionalProps]?: 'dateIntroduced'

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

  @Unique({ name: 'uc_toy_barcode' })
  @Property({ length: 256 })
  barcode!: string

  @Property({ columnType: 'numeric' })
  price!: string

  @Property()
  currency!: string

  @Property({ length: 6, defaultRaw: 'now()' })
  dateIntroduced!: Date

  @Property({ length: 256, nullable: true })
  naughty?: string

  @OneToMany({ entity: () => ToyHouse, mappedBy: 'toy' })
  houseToys = new Collection<ToyHouse>(this)
}
