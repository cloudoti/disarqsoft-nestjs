import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { BrandService } from '../service/brand.service';
import { BrandEntity } from '../entities/brand.entity';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(): Promise<BrandEntity[]> {
    return this.brandService.list();
  }
}
