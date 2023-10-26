import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClientEntity } from './client.entity';
import { BrandEntity } from './brand.entity';

@Entity({
  schema: 'das',
  name: 'vehicle',
})
export class VehicleEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'vehicle_registration',
    nullable: false,
  })
  vehicleRegistration: string;

  @Column({
    name: 'model',
    nullable: false,
  })
  model: string;

  @ManyToOne(() => BrandEntity, (cat) => cat.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'brand_id',
  })
  brand: BrandEntity;

  @Column({
    nullable: false,
  })
  type: string;

  @Column({
    nullable: false,
  })
  motor: string;

  @Column({
    nullable: false,
  })
  year: string;

  @ManyToOne(() => ClientEntity, (cat) => cat.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'client_id',
  })
  client: ClientEntity;

  @Column({
    nullable: false,
    default: true,
  })
  active: boolean;
}
