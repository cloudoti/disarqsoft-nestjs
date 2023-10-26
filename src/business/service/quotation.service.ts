import { Inject, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { QuotationEntity } from '../entities/quotation.entity';

@Injectable()
export class QuotationService {
  private logger: Logger = new Logger(QuotationService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async list(): Promise<QuotationEntity[]> {
    const repository = this.datasource.getRepository(QuotationEntity);

    return await repository.find({ relations: ['client', 'vehicle'] });
  }

  async save(o: QuotationEntity) {
    o.issueDate = new Date();
    o.detail.forEach((d) => (d.quotation = o));
    const repository = this.datasource.getRepository(QuotationEntity);

    await repository.save(o);
  }
}
