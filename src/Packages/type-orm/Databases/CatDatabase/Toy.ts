import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm'
import { ToyHouse } from './ToyHouse'
import { ToysProducer } from './ToysProducer'

@Entity()
export class Toy {
  @PrimaryColumn()
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

  @Column()
  declare date_introduced: Date

  @OneToMany(() => ToyHouse, toyHouse => toyHouse.toy)
  declare toyHouses: ToyHouse[]

  @ManyToOne(() => ToysProducer, toysProducer => toysProducer.toys)
  declare toysProducer: ToysProducer
}
