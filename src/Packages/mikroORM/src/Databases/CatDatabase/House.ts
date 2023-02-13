import {
  Collection,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { Cats } from './Cats'
import { ToysHouse } from './ToysHouse'

@Entity()
export class House {
  @PrimaryKey()
  id!: number

  @Property({ length: 256, nullable: true })
  houseAddress?: string

  @Property({ nullable: true })
  hasDog?: boolean

  @ManyToMany({
    entity: () => Cats,
    joinColumn: 'house_id',
    inverseJoinColumn: 'cat_id',
  })
  cats = new Collection<Cats>(this)

  @OneToMany({ entity: () => ToysHouse, mappedBy: 'house' })
  toysHouse = new Collection<ToysHouse>(this)
}
