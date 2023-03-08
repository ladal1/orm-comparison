import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Toy } from './Toy'

@Entity()
export class ToysProducer {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'jsonb' })
  stockInfo: Record<string, any>

  @Column({ type: 'json' })
  hqLocation: Record<string, any>

  @OneToMany(() => Toy, toy => toy.toysProducer)
  toys: Toy[]
}
