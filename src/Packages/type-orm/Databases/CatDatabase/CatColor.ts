import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Cat } from './Cat'
import { ColorHex } from './ColorHex'

@Entity()
export class CatColor {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  colorName: string

  @OneToMany(() => Cat, cat => cat.catColor)
  cats: Cat[]

  @ManyToOne(() => ColorHex)
  @JoinColumn({ name: 'id' })
  colorHex: ColorHex
}
