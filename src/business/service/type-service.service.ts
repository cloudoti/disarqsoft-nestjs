import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeServiceEntity } from '../entities/type-service.entity';

@Injectable()
export class TypeServiceService {
  private logger: Logger = new Logger(TypeServiceService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async list(): Promise<TypeServiceEntity[]> {
    const repository = this.datasource.getRepository(TypeServiceEntity);

    return await repository.find();
  }
}
