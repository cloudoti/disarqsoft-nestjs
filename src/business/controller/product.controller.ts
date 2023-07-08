import {
  Controller,
  Get,
  Put,
  Post,
  HttpCode,
  UseGuards,
  Param,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ProductService } from '../service/product.service';
import { ProductEntity } from '../entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private prodService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(): Promise<ProductEntity[]> {
    return this.prodService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(200)
  async getById(@Param('id') id: number): Promise<ProductEntity> {
    return this.prodService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async add(@Body() body: ProductEntity): Promise<ProductEntity> {
    return this.prodService.save(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @HttpCode(200)
  async edit(
    @Param('id') id: number,
    @Body() body: ProductEntity,
  ): Promise<ProductEntity> {
    return this.prodService.save(body, id);
  }
}
