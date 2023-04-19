import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm'
import { CatColor } from './CatColor'
import { House } from './House'

@Entity()
export class Cat {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  declare id: string

  @Column()
  declare catName: string

  @Column()
  declare dateOfBirth: Date

  @ManyToOne(() => CatColor, catColor => catColor.cats)
  declare catColor: CatColor

  @ManyToMany(() => House, house => house.cats)
  declare houses: House[]
}
