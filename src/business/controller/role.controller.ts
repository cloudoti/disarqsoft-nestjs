import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RoleEntity } from '../entities/role.entity';

@Controller('role')
export class RoleController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async listRoles(): Promise<RoleEntity[]> {
    return this.userService.listRole();
  }
}
