import { Inject, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';
import { BrandEntity } from '../entities/brand.entity';

@Injectable()
export class BrandService {
  private logger: Logger = new Logger(BrandService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async list(): Promise<BrandEntity[]> {
    const repository = this.datasource.getRepository(BrandEntity);

    return await repository.find();
  }
}
