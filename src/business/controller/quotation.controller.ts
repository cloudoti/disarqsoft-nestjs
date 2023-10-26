import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { OrderEntity } from '../entities/order.entity';
import { OrderService } from '../service/order.service';
import { QuotationService } from '../service/quotation.service';
import { QuotationEntity } from '../entities/quotation.entity';

@Controller('quotation')
export class QuotationController {
  constructor(private service: QuotationService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(): Promise<QuotationEntity[]> {
    return this.service.list();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async save(@Body() body: QuotationEntity): Promise<void> {
    return this.service.save(body);
  }
}
