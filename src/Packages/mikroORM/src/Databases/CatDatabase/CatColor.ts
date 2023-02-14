import {
  Collection,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { Cat } from './Cat'
import { ColorHex } from './ColorHex'

@Entity()
export class CatColor {
  @PrimaryKey()
  id!: number

  @Property({ length: 256 })
  colorName!: string

  @OneToMany({ entity: () => Cat, mappedBy: 'catColor' })
  cats = new Collection<Cat>(this)

  @OneToOne({ entity: () => ColorHex, mappedBy: 'id' })
  colorHex?: ColorHex
}
