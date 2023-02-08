import {
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'

@Entity()
export class ColorHex {
  @PrimaryKey()
  id!: number

  @Property()
  hex_code!: string

  @OneToOne(() => CatColor)
  cat_color!: CatColor
}

@Entity()
export class CatColor {
  @PrimaryKey()
  id!: number

  @Property()
  color_name!: string

  @OneToOne(() => ColorHex)
  color_hex!: ColorHex
}

@Entity()
export class Cat {
  @PrimaryKey()
  id!: number

  @Property()
  name!: string

  @Property()
  date_of_birth!: Date

  @Property()
  cat_color_id!: number

  @ManyToOne(() => CatColor)
  cat_color!: CatColor
}
