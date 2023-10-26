import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModuleEntity } from './module.entity';
import { RoleEntity } from './role.entity';

@Entity({
  schema: 'das',
  name: 'menu',
})
export class MenuEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: true,
  })
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => ModuleEntity, (v) => v.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'module_id',
  })
  module: ModuleEntity;

  @ManyToOne(() => RoleEntity, (v) => v.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'role_id',
  })
  role: RoleEntity;

  @Column({
    default: true,
    nullable: false,
  })
  active: boolean;
}
