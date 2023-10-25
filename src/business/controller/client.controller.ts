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
import { ClientService } from '../service/client.service';
import { ClientEntity } from '../entities/client.entity';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(): Promise<ClientEntity[]> {
    return this.clientService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(200)
  async getById(@Param('id') id: number): Promise<ClientEntity> {
    return this.clientService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async add(@Body() body: ClientEntity): Promise<ClientEntity> {
    return this.clientService.save(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @HttpCode(200)
  async edit(
    @Param('id') id: number,
    @Body() body: ClientEntity,
  ): Promise<ClientEntity> {
    return this.clientService.save(body, id);
  }
}
