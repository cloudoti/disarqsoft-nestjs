import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductService {
  private logger: Logger = new Logger(ProductService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async list(): Promise<ProductEntity[]> {
    const prodRepository = this.datasource.getRepository(ProductEntity);

    return await prodRepository.find({ relations: ['typeService'] });
  }

  async getById(id: number): Promise<ProductEntity> {
    const prodRepository = this.datasource.getRepository(ProductEntity);

    return await prodRepository.findOne({
      where: { id: id },
      relations: ['typeService'],
    });
  }

  async save(prod: ProductEntity, id?: number): Promise<ProductEntity> {
    if (id && +id !== prod.id) {
      throw new Error('Incorrect');
    }

    const prodRepository = this.datasource.getRepository(ProductEntity);

    return await prodRepository.save(prod);
  }
}
