import { Inject, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';

@Injectable()
export class VehicleService {
  private logger: Logger = new Logger(VehicleService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async list(): Promise<VehicleEntity[]> {
    const repository = this.datasource.getRepository(VehicleEntity);

    return await repository.find();
  }

  async getById(id: number): Promise<VehicleEntity> {
    const repository = this.datasource.getRepository(VehicleEntity);

    return await repository.findOne({
      where: { id: id },
      relations: ['client'],
    });
  }

  async save(prod: VehicleEntity, id?: number): Promise<VehicleEntity> {
    if (id && +id !== prod.id) {
      throw new Error('Incorrect');
    }

    const repository = this.datasource.getRepository(VehicleEntity);

    return await repository.save(prod);
  }
}
