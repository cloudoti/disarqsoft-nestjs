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
import { UserService } from '../service/user.service';
import { UserEntity } from '../entities/user.entity';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(200)
  async getById(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async add(@Body() body: UserEntity): Promise<UserEntity> {
    return this.userService.save(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @HttpCode(200)
  async edit(
    @Param('id') id: number,
    @Body() body: UserEntity,
  ): Promise<UserEntity> {
    return this.userService.save(body, id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(): Promise<UserEntity[]> {
    return this.userService.list();
  }
}
