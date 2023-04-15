import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm'
import { Toy } from './Toy'
import { House } from './House'

@Entity()
export class ToyHouse {
  @PrimaryColumn()
  declare toyId: number

  @PrimaryColumn()
  declare houseId: number

  @Column()
  declare amount: number

  @ManyToOne(() => Toy, toy => toy.toyHouses)
  declare toy: Toy

  @ManyToOne(() => House, house => house.toyHouses)
  declare house: House
}
