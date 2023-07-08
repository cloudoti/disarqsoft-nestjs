import { Inject, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderService {
  private logger: Logger = new Logger(OrderService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async list(): Promise<OrderEntity[]> {
    const repository = this.datasource.getRepository(OrderEntity);

    return await repository.find();
  }

  async save(o: OrderEntity) {
    o.issueDate = new Date();
    o.detail.forEach((d) => (d.order = o));
    const repository = this.datasource.getRepository(OrderEntity);

    await repository.save(o);
  }
}
