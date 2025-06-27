import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(@InjectRepository(Customer) private repo: Repository<Customer>) {}

  create(dto: CreateCustomerDto): Promise<Customer> {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async findById(id: number): Promise<Customer> {
    const entity = await this.repo.findOneBy({ customer_id: id });
    if (!entity) throw new Error('Cliente no encontrado');
    return entity;
  }

  async update(id: number, dto: UpdateCustomerDto): Promise<Customer> {
    const entity = await this.repo.findOneBy({ customer_id: id });
    if (!entity) throw new Error('Cliente no encontrado');
    Object.assign(entity, dto);
    return this.repo.save(entity);
  }

  async replace(id: number, dto: CreateCustomerDto): Promise<Customer> {
    const entity = await this.repo.findOneBy({ customer_id: id });
    if (!entity) throw new Error('Cliente no encontrado');
    entity.name_customer = dto.name_customer;
    entity.phone = dto.phone;
    entity.address = dto.address;
    return this.repo.save(entity);
  }

  async delete(id: number): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new Error('Cliente no encontrado');
  }
}
