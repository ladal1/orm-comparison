import {
  Collection,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { Cat } from './Cat'
import { ToyHouse } from './ToyHouse'

@Entity()
export class House {
  @PrimaryKey()
  id!: number

  @Property({ length: 256, nullable: true })
  houseAddress?: string

  @Property({ nullable: true })
  hasDog?: boolean

  @ManyToMany({
    entity: () => Cat,
    joinColumn: 'house_id',
    inverseJoinColumn: 'cat_id',
    pivotTable: 'house_cat',
  })
  cats = new Collection<Cat>(this)

  @OneToMany({ entity: () => ToyHouse, mappedBy: 'house' })
  toysHouse = new Collection<ToyHouse>(this)
}
