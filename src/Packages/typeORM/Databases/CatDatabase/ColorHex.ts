import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { CatColor } from './CatColor'

@Entity()
export class ColorHex {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  hexCode: string

  @OneToMany(() => CatColor, catColor => catColor.colorHex)
  catColors: CatColor[]
}
