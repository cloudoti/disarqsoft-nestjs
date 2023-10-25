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
  name: 'client',
})
export class ClientEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'type_nie',
    nullable: false,
  })
  typeNie: string;

  @Column({
    nullable: false,
  })
  nie: string;

  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'father_last_name',
    nullable: false,
  })
  fatherLastName: string;

  @Column({
    name: 'mother_last_name',
    nullable: false,
  })
  motherLastName: string;

  @Column({
    name: 'company_name',
  })
  companyName: string;

  @Column({
    nullable: true,
  })
  phone: string;

  @Column({
    nullable: true,
  })
  email: string;

  @Column({
    default: true,
    nullable: false,
  })
  active: boolean;
}
