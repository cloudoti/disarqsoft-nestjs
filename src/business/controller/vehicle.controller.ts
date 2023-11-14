import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { brandService } from '../service/vehicle.service';
import { VehicleEntity } from '../entities/vehicle.entity';

@Controller('vehicle')
export class VehicleController {
  constructor(private vehicleService: brandService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(): Promise<VehicleEntity[]> {
    return this.vehicleService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(200)
  async getById(@Param('id') id: number): Promise<VehicleEntity> {
    return this.vehicleService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/client/:id')
  @HttpCode(200)
  async getByClient(@Param('id') id: number): Promise<VehicleEntity[]> {
    return this.vehicleService.getByClientId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async add(@Body() body: VehicleEntity): Promise<VehicleEntity> {
    return this.vehicleService.save(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @HttpCode(200)
  async edit(
    @Param('id') id: number,
    @Body() body: VehicleEntity,
  ): Promise<VehicleEntity> {
    return this.vehicleService.save(body, id);
  }
}
