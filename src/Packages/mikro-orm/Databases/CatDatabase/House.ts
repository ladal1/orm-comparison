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

  @Property({ nullable: true })
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

  constructor({
    id,
    houseAddress,
    hasDog,
  }: {
    id?: number
    houseAddress?: string
    hasDog?: boolean
  }) {
    if (id) {
      this.id = id
    }
    this.houseAddress = houseAddress
    this.hasDog = hasDog
  }
}
