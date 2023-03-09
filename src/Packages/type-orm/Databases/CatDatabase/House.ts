import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm'
import { Cat } from './Cat'
import { ToyHouse } from './ToyHouse'

@Entity()
export class House {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  houseAddress: string

  @Column()
  hasDog: boolean

  @ManyToMany(() => Cat, cat => cat.houses)
  @JoinTable({
    name: 'house_cat',
    //  joinColumn: 'house_id',
    //  inverseJoinColumn: 'cat_id',
  })
  cats: Cat[]

  @OneToMany(() => ToyHouse, toyHouse => toyHouse.house)
  toyHouses: ToyHouse[]
}
