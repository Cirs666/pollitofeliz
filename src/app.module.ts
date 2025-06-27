import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/database.config';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { CustomerModule } from './modules/customer/customer.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { SaleModule } from './modules/sale/sale.module';
import { SaleDetailModule } from './modules/sale_detail/sale_detail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig()),
    UserModule,
    ProductModule,
    CustomerModule,
    EmployeeModule,
    SaleModule,
    SaleDetailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
