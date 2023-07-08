import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';

@Injectable()
export class CategoryService {
  private logger: Logger = new Logger(CategoryService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async list(): Promise<CategoryEntity[]> {
    const repository = this.datasource.getRepository(CategoryEntity);

    return await repository.find();
  }
}
