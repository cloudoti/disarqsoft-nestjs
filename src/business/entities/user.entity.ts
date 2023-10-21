import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleEntity } from './role.entity';

@Entity({
  schema: 'das',
  name: 'user',
})
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => RoleEntity, (p) => p.id, {
    //nullable: false,
  })
  @JoinColumn({
    name: 'role_id',
  })
  role: RoleEntity;

  @Column({
    name: 'name',
    //nullable: false,
  })
  name: string;

  @Column({
    name: 'father_last_name',
    //nullable: false,
  })
  fatherLastName: string;

  @Column({
    name: 'mother_last_name',
    //nullable: false,
  })
  motherLastName: string;

  @Column({
    name: 'username',
    nullable: true,
  })
  username: string;

  @Column({
    nullable: true,
  })
  password: string;

  @Column({
    default: true,
    nullable: false,
  })
  active: boolean;
}
