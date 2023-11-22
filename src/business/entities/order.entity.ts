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
import { VehicleEntity } from './vehicle.entity';
import { ClientEntity } from './client.entity';

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
  price: number;

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

  @Column({
    name: 'warranty_date',
  })
  warrantyDate: Date;

  @ManyToOne(() => VehicleEntity, (v) => v.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'vehicle_id',
  })
  vehicle: VehicleEntity;

  @ManyToOne(() => ClientEntity, (v) => v.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'client_id',
  })
  client: ClientEntity;

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
