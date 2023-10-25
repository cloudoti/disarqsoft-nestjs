import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { AuthModule } from '../auth/auth.module';
import { ProductEntity } from './entities/product.entity';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import { CategoryEntity } from './entities/category.entity';
import { CategoryService } from './service/category.service';
import { CategoryController } from './controller/category.controller';
import { OrderEntity } from './entities/order.entity';
import { OrderDetailEntity } from './entities/order-detail.entity';
import { OrderService } from './service/order.service';
import { OrderController } from './controller/order.controller';
import { EmployeeEntity } from './entities/employee.entity';
import { EmployeeService } from './service/employee.service';
import { EmployeeController } from './controller/employee.controller';
import { RoleController } from './controller/role.controller';
import { ClientEntity } from './entities/client.entity';
import { VehicleEntity } from './entities/vehicle.entity';
import { ClientService } from './service/client.service';
import { ClientController } from './controller/client.controller';
import { VehicleService } from './service/vehicle.service';
import { VehicleController } from './controller/vehicle.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      EmployeeEntity,
      ClientEntity,
      VehicleEntity,
      CategoryEntity,
      ProductEntity,
      OrderEntity,
      OrderDetailEntity,
    ]),
    forwardRef(() => AuthModule),
  ],
  providers: [
    UserService,
    ClientService,
    VehicleService,
    ProductService,
    CategoryService,
    OrderService,
    EmployeeService,
  ],
  controllers: [
    UserController,
    ClientController,
    VehicleController,
    ProductController,
    CategoryController,
    OrderController,
    EmployeeController,
    RoleController,
  ],
  exports: [UserService],
})
export class BusinessModule {}
