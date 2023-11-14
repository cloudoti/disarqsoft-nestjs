import { Inject, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class OrderService {
  private logger: Logger = new Logger(OrderService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async list(): Promise<OrderEntity[]> {
    const repository = this.datasource.getRepository(OrderEntity);

    return await repository.find({ relations: ['client', 'vehicle'] });
  }

  async save(o: OrderEntity, idUser: number) {
    o.issueDate = new Date();
    o.user = new UserEntity(idUser);
    o.detail.forEach((d) => (d.order = o));
    const repository = this.datasource.getRepository(OrderEntity);

    await repository.save(o);
  }
}
