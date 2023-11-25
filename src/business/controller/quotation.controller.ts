import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { QuotationService } from '../service/quotation.service';
import { QuotationEntity } from '../entities/quotation.entity';

@Controller('quotation')
export class QuotationController {
  constructor(private service: QuotationService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(@Query('filter') filter?: string): Promise<QuotationEntity[]> {
    return this.service.list(filter);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(200)
  async getById(@Param('id') id: number): Promise<QuotationEntity> {
    return this.service.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async save(@Body() body: QuotationEntity): Promise<void> {
    return this.service.save(body);
  }
}
