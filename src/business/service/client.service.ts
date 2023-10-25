import { Inject, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ClientEntity } from '../entities/client.entity';

@Injectable()
export class ClientService {
  private logger: Logger = new Logger(ClientService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async list(): Promise<ClientEntity[]> {
    const repository = this.datasource.getRepository(ClientEntity);

    return await repository.find();
  }

  async getById(id: number): Promise<ClientEntity> {
    const repository = this.datasource.getRepository(ClientEntity);

    return await repository.findOne({
      where: { id: id },
    });
  }

  async save(prod: ClientEntity, id?: number): Promise<ClientEntity> {
    if (id && +id !== prod.id) {
      throw new Error('Incorrect');
    }

    const repository = this.datasource.getRepository(ClientEntity);

    return await repository.save(prod);
  }
}
