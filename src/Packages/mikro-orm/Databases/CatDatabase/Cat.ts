import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { CatColor } from './CatColor'
import { House } from './House'

@Entity()
export class Cat {
  @PrimaryKey({ columnType: 'int8' })
  id!: string

  @ManyToOne({ entity: () => CatColor, onDelete: 'cascade', nullable: true })
  catColor?: CatColor

  @Property({ length: 256, nullable: true })
  catName?: string

  @Property({ columnType: 'date', nullable: true })
  dateOfBirth?: string

  @ManyToMany({
    entity: () => House,
    mappedBy: 'cats',
    pivotTable: 'house_cat',
  })
  houses = new Collection<House>(this)
}
