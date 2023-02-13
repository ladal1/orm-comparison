import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { CatColors } from './CatColors'
import { House } from './House'

@Entity()
export class Cats {
  @PrimaryKey()
  id!: number

  @ManyToOne({ entity: () => CatColors, onDelete: 'cascade', nullable: true })
  catColor?: CatColors

  @Property({ length: 256, nullable: true })
  catName?: string

  @Property({ columnType: 'date', nullable: true })
  dateOfBirth?: string

  @ManyToMany({ entity: () => House, mappedBy: 'cats' })
  houses = new Collection<House>(this)
}
