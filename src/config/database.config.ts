import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../modules/user/entities/user.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { Employee } from 'src/modules/employee/entities/employee.entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Sale } from 'src/modules/sale/entities/sale.entity';
import { SaleDetail } from 'src/modules/sale_detail/entities/sale_detail.entity';

export function typeOrmConfig(): TypeOrmModuleOptions {
    return {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        schema: process.env.DB_SCHEMA,
        entities: [
            User,
            Customer,
            Employee,
            Product,
            Sale,
            SaleDetail,
        ],
        synchronize: process.env.DB_SYNCHRONIZE === 'true',
    };
}