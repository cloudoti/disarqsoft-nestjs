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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      EmployeeEntity,
      CategoryEntity,
      ProductEntity,
      OrderEntity,
      OrderDetailEntity,
    ]),
    forwardRef(() => AuthModule),
  ],
  providers: [
    UserService,
    ProductService,
    CategoryService,
    OrderService,
    EmployeeService,
  ],
  controllers: [
    UserController,
    ProductController,
    CategoryController,
    OrderController,
    EmployeeController,
    RoleController,
  ],
  exports: [UserService],
})
export class BusinessModule {}
