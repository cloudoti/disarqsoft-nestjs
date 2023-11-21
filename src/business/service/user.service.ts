import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { RoleEntity } from '../entities/role.entity';

@Injectable()
export class UserService {
  private logger: Logger = new Logger(UserService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async getById(id: number): Promise<UserEntity> {
    const userRepository = this.datasource.getRepository(UserEntity);

    return await userRepository.findOne({
      where: { id: id },
      relations: ['role'],
    });
  }

  async save(prod: UserEntity, id?: number): Promise<UserEntity> {
    if (id && +id !== prod.id) {
      throw new Error('Incorrect');
    }

    const userRepository = this.datasource.getRepository(UserEntity);

    return await userRepository.save(prod);
  }

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

    return await userRepository.find();
  }

  async listRole(): Promise<RoleEntity[]> {
    const roleRepository = this.datasource.getRepository(RoleEntity);

    return await roleRepository.find();
  }
}
