import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../business/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  /*async validateUser(body: { username: string; pass: string }): Promise<any> {
    const user = await this.userService.send(body);
    if (user) {
      return user;
    }
    return null;
  }*/

  async login(body: any) {
    const user = await this.userService.login(body);
    if (user) {
      const payload = { username: user.username, sub: user.id };

      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new UnauthorizedException('No autorizado');
  }
}
