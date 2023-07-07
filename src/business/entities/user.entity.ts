import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  schema: 'das',
  name: 'user',
})
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

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
