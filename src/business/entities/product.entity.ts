import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeServiceEntity } from './type-service.entity';

@Entity({
  schema: 'das',
  name: 'product',
})
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

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
  igv: number;

  @ManyToOne(() => TypeServiceEntity, (cat) => cat.id, {
    //nullable: false,
  })
  @JoinColumn({
    name: 'type_service_id',
  })
  typeService: TypeServiceEntity;

  @Column({
    nullable: false,
    default: true,
  })
  active: boolean;
}
