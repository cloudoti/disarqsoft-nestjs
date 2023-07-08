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

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(): Promise<OrderEntity[]> {
    return this.orderService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async save(@Body() body: OrderEntity): Promise<void> {
    return this.orderService.save(body);
  }
}
