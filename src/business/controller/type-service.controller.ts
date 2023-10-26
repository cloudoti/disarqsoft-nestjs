import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { TypeServiceService } from '../service/type-service.service';
import { TypeServiceEntity } from '../entities/type-service.entity';

@Controller('type-service')
export class TypeServiceController {
  constructor(private service: TypeServiceService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(): Promise<TypeServiceEntity[]> {
    return this.service.list();
  }
}
