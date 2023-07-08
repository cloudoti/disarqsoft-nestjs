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
    name: 'code',
    nullable: false,
  })
  code: string;

  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    nullable: true,
  })
  observation: string;

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
  })
  status: string;
}
