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
  declare id: number

  @Column()
  declare toyName: string

  @Column()
  declare barcode: string

  @Column()
  declare price: number

  @Column()
  declare currency: string

  @Column()
  declare naughty: string

  @OneToMany(() => ToyHouse, toyHouse => toyHouse.toy)
  declare toyHouses: ToyHouse[]

  @ManyToOne(() => ToysProducer, toysProducer => toysProducer.toys)
  declare toysProducer: ToysProducer
}
