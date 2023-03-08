import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm'
import { ToyHouse } from './ToyHouse'
import { ToysProducer } from './ToysProducer'

@Entity()
export class Toy {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  toyName: string

  @Column()
  barcode: string

  @Column()
  price: number

  @Column()
  currency: string

  @Column()
  naughty: string

  @OneToMany(() => ToyHouse, toyHouse => toyHouse.toy)
  toyHouses: ToyHouse[]

  @ManyToOne(() => ToysProducer, toysProducer => toysProducer.toys)
  toysProducer: ToysProducer
}
