import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';

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
  })
  price: number;

  @ManyToOne(() => CategoryEntity, (cat) => cat.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'category',
  })
  category: CategoryEntity;

  @Column({
    nullable: false,
    default: 1,
  })
  status: number;
}
