import { Entity, OneToOne, Property } from '@mikro-orm/core'
import { CatColors } from './CatColors'

@Entity()
export class ColorHex {
  @OneToOne({
    entity: () => CatColors,
    fieldName: 'id',
    onDelete: 'cascade',
    primary: true,
  })
  id!: CatColors

  @Property({ length: 256 })
  hexCode!: string
}
