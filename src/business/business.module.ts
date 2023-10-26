import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { AuthModule } from '../auth/auth.module';
import { ProductEntity } from './entities/product.entity';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import { TypeServiceEntity } from './entities/type-service.entity';
import { TypeServiceService } from './service/type-service.service';
import { TypeServiceController } from './controller/type-service.controller';
import { OrderEntity } from './entities/order.entity';
import { OrderDetailEntity } from './entities/order-detail.entity';
import { OrderService } from './service/order.service';
import { OrderController } from './controller/order.controller';
import { RoleController } from './controller/role.controller';
import { ClientEntity } from './entities/client.entity';
import { VehicleEntity } from './entities/vehicle.entity';
import { ClientService } from './service/client.service';
import { ClientController } from './controller/client.controller';
import { VehicleService } from './service/vehicle.service';
import { VehicleController } from './controller/vehicle.controller';
import { QuotationEntity } from './entities/quotation.entity';
import { QuotationDetailEntity } from './entities/quotation-detail.entity';
import { QuotationController } from './controller/quotation.controller';
import { QuotationService } from './service/quotation.service';
import { BrandEntity } from './entities/brand.entity';
import { ModuleEntity } from './entities/module.entity';
import { MenuEntity } from './entities/menu.entity';
import { RoleEntity } from './entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      RoleEntity,
      ModuleEntity,
      MenuEntity,
      ClientEntity,
      VehicleEntity,
      BrandEntity,
      TypeServiceEntity,
      ProductEntity,
      OrderEntity,
      OrderDetailEntity,
      QuotationEntity,
      QuotationDetailEntity,
    ]),
    forwardRef(() => AuthModule),
  ],
  providers: [
    UserService,
    ClientService,
    VehicleService,
    ProductService,
    TypeServiceService,
    OrderService,
    QuotationService,
  ],
  controllers: [
    UserController,
    ClientController,
    VehicleController,
    ProductController,
    TypeServiceController,
    OrderController,
    QuotationController,
    RoleController,
  ],
  exports: [UserService],
})
export class BusinessModule {}
