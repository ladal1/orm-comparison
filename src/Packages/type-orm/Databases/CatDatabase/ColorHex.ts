import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { CatColor } from './CatColor'

@Entity()
export class ColorHex {
  @PrimaryGeneratedColumn()
  declare id: number

  @Column()
  declare hexCode: string

  @OneToMany(() => CatColor, catColor => catColor.colorHex)
  declare catColors: CatColor[]
}
