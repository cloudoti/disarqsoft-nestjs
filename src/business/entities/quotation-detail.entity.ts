import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { QuotationEntity } from './quotation.entity';

@Entity({
  schema: 'das',
  name: 'quotation_detail',
})
export class QuotationDetailEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => QuotationEntity, (o) => o.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'quotation_id',
  })
  quotation: QuotationEntity;

  @ManyToOne(() => ProductEntity, (p) => p.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id',
  })
  product: ProductEntity;

  @Column({
    nullable: false,
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  quantity: number;

  @Column({
    name: 'price',
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
  igv: number;

  @Column({
    nullable: false,
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  total: number;
}
