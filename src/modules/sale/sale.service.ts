import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SaleService {
  constructor(@InjectRepository(Sale) private repo: Repository<Sale>) {}

  create(dto: CreateSaleDto): Promise<Sale> {
    const ent = this.repo.create(dto);
    return this.repo.save(ent);
  }

  async findById(id: number): Promise<Sale> {
    const ent = await this.repo.findOneBy({ sale_id: id });
    if (!ent) throw new Error('Venta no encontrada');
    return ent;
  }

  async update(id: number, dto: UpdateSaleDto): Promise<Sale> {
    const ent = await this.repo.findOneBy({ sale_id: id });
    if (!ent) throw new Error('Venta no encontrada');
    Object.assign(ent, dto);
    return this.repo.save(ent);
  }

  async replace(id: number, dto: CreateSaleDto): Promise<Sale> {
    const ent = await this.repo.findOneBy({ sale_id: id });
    if (!ent) throw new Error('Venta no encontrada');
    ent.fk_sale_customer = dto.customer_id;
    ent.fk_sale_employee = dto.employee_id;
    ent.total = dto.total;
    return this.repo.save(ent);
  }

  async delete(id: number): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new Error('Venta no encontrada');
  }
}
