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
    name: 'payment_method',
    nullable: false,
  })
  paymentMethod: string;

  @Column({
    name: 'total_delivery',
    nullable: false,
  })
  totalDelivery: number;

  @Column({
    nullable: false,
  })
  total: number;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @OneToMany(() => OrderDetailEntity, (d) => d.order, {
    cascade: true,
  })
  detail: OrderDetailEntity[];
}
