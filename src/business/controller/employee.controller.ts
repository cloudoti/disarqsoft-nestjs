import { Controller, Get, HttpCode, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { EmployeeService } from '../service/employee.service';
import { EmployeeEntity } from '../entities/employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private service: EmployeeService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async filter(@Query('text') text?: string): Promise<EmployeeEntity[]> {
    return this.service.filter(text);
  }
}
