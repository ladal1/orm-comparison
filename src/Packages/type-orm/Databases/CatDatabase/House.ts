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
  declare id: number

  @Column()
  declare houseAddress: string

  @Column()
  declare hasDog: boolean

  @ManyToMany(() => Cat, cat => cat.houses)
  @JoinTable({
    name: 'house_cat',
    //  joinColumn: 'house_id',
    //  inverseJoinColumn: 'cat_id',
  })
  declare cats: Cat[]

  @OneToMany(() => ToyHouse, toyHouse => toyHouse.house)
  declare toyHouses: ToyHouse[]
}
