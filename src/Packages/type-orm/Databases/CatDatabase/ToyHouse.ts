import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Toy } from './Toy'
import { House } from './House'

@Entity()
export class ToyHouse {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  amount: number

  @ManyToOne(() => Toy, toy => toy.toyHouses)
  toy: Toy

  @ManyToOne(() => House, house => house.toyHouses)
  house: House
}
