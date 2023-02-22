import { Entity, OneToOne, Property } from '@mikro-orm/core'
import { CatColor } from './CatColor'

@Entity()
export class ColorHex {
  @OneToOne({
    entity: () => CatColor,
    fieldName: 'id',
    onDelete: 'cascade',
    primary: true,
  })
  id!: CatColor

  @Property({ length: 256 })
  hexCode!: string
}
