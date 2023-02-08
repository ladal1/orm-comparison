import {
  Collection,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { Cats } from './Cats'
import { ColorHex } from './ColorHex'

@Entity()
export class CatColors {
  @PrimaryKey()
  id!: number

  @Property({ length: 256 })
  colorName!: string

  @OneToMany({ entity: () => Cats, mappedBy: 'catColor' })
  cats = new Collection<Cats>(this)

  @OneToOne({ entity: () => ColorHex, mappedBy: 'id' })
  colorHex?: ColorHex
}
