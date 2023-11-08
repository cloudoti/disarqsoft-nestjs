import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VehicleEntity } from './vehicle.entity';
import { ClientEntity } from './client.entity';
import { QuotationDetailEntity } from './quotation-detail.entity';

@Entity({
  schema: 'das',
  name: 'quotation',
})
export class QuotationEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'issue_date',
    nullable: false,
  })
  issueDate: Date;

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

  @OneToMany(() => QuotationDetailEntity, (d) => d.quotation, {
    cascade: true,
  })
  detail: QuotationDetailEntity[];
}
