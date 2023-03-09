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
  declare id: number

  @Column()
  declare colorName: string

  @OneToMany(() => Cat, cat => cat.catColor)
  declare cats: Cat[]

  @ManyToOne(() => ColorHex)
  @JoinColumn({ name: 'id' })
  declare colorHex: ColorHex
}
