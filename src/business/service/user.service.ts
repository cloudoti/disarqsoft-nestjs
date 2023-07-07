import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  private logger: Logger = new Logger(UserService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async login(body: any): Promise<UserEntity> {
    //const qr = this.datasource.createQueryRunner();

    const userRepository = this.datasource.getRepository(UserEntity);

    const user = await userRepository.findOne({
      where: { username: body.username },
    });

    const error = 'E-Mail or Pass incorrect';

    if (!user) {
      throw new UnauthorizedException({ error: [error] });
    }

    const isPasswordValid: boolean = body.password == user.password;

    if (!isPasswordValid) {
      throw new UnauthorizedException({ error: [error] });
    }

    return user;
  }

  async list(body?: any): Promise<UserEntity[]> {
    const userRepository = this.datasource.getRepository(UserEntity);

    return await userRepository.find({
      where: { active: true },
    });
  }
}
