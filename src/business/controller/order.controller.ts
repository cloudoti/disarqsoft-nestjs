import {
  Body,
  Request,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { OrderEntity } from '../entities/order.entity';
import { OrderService } from '../service/order.service';
import { QuotationEntity } from '../entities/quotation.entity';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(200)
  async getById(@Param('id') id: number): Promise<OrderEntity> {
    return this.orderService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(): Promise<OrderEntity[]> {
    return this.orderService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async save(@Body() body: OrderEntity, @Request() req: any): Promise<void> {
    return this.orderService.save(body, req.user.id);
  }
}
