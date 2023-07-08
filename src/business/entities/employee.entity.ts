import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({
  schema: 'das',
  name: 'employee',
})
export class EmployeeEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false,
  })
  nie: string;

  @Column({
    name: 'first_name',
    nullable: false,
  })
  firstName: string;

  @Column({
    name: 'last_name',
    nullable: false,
  })
  lastName: string;

  @Column({
    default: true,
    nullable: false,
  })
  active: boolean;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;
}
