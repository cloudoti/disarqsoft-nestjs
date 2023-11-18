import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  schema: 'das',
  name: 'client',
})
export class ClientEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'type_nie',
    nullable: true,
  })
  typeNie: string;

  @Column({
    nullable: false,
  })
  nie: string;

  @Column({
    name: 'name',
    nullable: true,
  })
  name: string;

  @Column({
    name: 'father_last_name',
    nullable: true,
  })
  fatherLastName: string;

  @Column({
    name: 'mother_last_name',
    nullable: true,
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
