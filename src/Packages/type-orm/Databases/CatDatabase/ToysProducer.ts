import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { Toy } from './Toy'

@Entity()
export class ToysProducer {
  @PrimaryColumn()
  declare id: number

  @Column({ type: 'jsonb' })
  declare stockInfo: Record<string, any>

  @Column({ type: 'json' })
  declare hqLocation: Record<string, any>

  @OneToMany(() => Toy, toy => toy.toysProducer)
  declare toys: Toy[]
}
