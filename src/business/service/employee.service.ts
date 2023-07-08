import { Inject, Injectable, Logger } from '@nestjs/common';
import { DataSource, ILike } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';

@Injectable()
export class EmployeeService {
  private logger: Logger = new Logger(EmployeeService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async filter(text?: any): Promise<EmployeeEntity[]> {
    const repository = this.datasource.getRepository(EmployeeEntity);

    const filters = { active: true };
    if (text) {
      filters['nie'] = ILike(`%${text}%`);
      filters['firstName'] = ILike(`%${text}%`);
      filters['lastName'] = ILike(`%${text}%`);
    }
    return await repository.find({
      where: [{ active: true }, filters],
    });
  }
}
