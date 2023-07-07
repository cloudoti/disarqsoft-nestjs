import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserEntity } from '../entities/user.entity';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async list(): Promise<UserEntity[]> {
    return this.userService.list();
  }
}
