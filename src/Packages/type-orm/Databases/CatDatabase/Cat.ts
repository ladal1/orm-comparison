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
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  catName: string

  @Column()
  dateOfBirth: Date

  @ManyToOne(() => CatColor, catColor => catColor.cats)
  catColor: CatColor

  @ManyToMany(() => House, house => house.cats)
  houses: House[]
}
