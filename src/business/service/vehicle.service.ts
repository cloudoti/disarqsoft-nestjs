import { Inject, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';
import { BrandEntity } from '../entities/brand.entity';

@Injectable()
export class brandService {
  private logger: Logger = new Logger(brandService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async list(): Promise<VehicleEntity[]> {
    const repository = this.datasource.getRepository(VehicleEntity);

    return await repository.find({ relations: ['brand'] });
  }

  async getById(id: number): Promise<VehicleEntity> {
    const repository = this.datasource.getRepository(VehicleEntity);

    return await repository.findOne({
      where: { id: id },
      relations: ['client', 'brand'],
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
