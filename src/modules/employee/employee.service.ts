import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private repo: Repository<Employee>) {}

  create(dto: CreateEmployeeDto): Promise<Employee> {
    const ent = this.repo.create(dto);
    return this.repo.save(ent);
  }

  async findById(id: number): Promise<Employee> {
    const ent = await this.repo.findOneBy({ employee_id: id });
    if (!ent) throw new Error('Empleado no encontrado');
    return ent;
  }

  async update(id: number, dto: UpdateEmployeeDto): Promise<Employee> {
    const ent = await this.repo.findOneBy({ employee_id: id });
    if (!ent) throw new Error('Empleado no encontrado');
    Object.assign(ent, dto);
    return this.repo.save(ent);
  }

  async replace(id: number, dto: CreateEmployeeDto): Promise<Employee> {
    const ent = await this.repo.findOneBy({ employee_id: id });
    if (!ent) throw new Error('Empleado no encontrado');
    ent.name_employee = dto.name_employee;
    ent.type_employee = dto.type_employee;
    ent.phone = dto.phone;
    return this.repo.save(ent);
  }

  async delete(id: number): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new Error('Empleado no encontrado');
  }
}
