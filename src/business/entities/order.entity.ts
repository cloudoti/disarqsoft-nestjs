import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { OrderDetailEntity } from './order-detail.entity';
import { QuotationEntity } from './quotation.entity';

@Entity({
  schema: 'das',
  name: 'order',
})
export class OrderEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'issue_date',
    nullable: false,
  })
  issueDate: Date;

  @Column({
    nullable: false,
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  total: number;

  @Column({
    nullable: false,
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  igv: number;

  @Column()
  warrantyDate: Date;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @ManyToOne(() => QuotationEntity, (user) => user.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'quotation_id',
  })
  quotation: QuotationEntity;

  @OneToMany(() => OrderDetailEntity, (d) => d.order, {
    cascade: true,
  })
  detail: OrderDetailEntity[];
}
