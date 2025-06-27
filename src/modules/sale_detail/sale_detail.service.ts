import { Injectable } from '@nestjs/common';
import { CreateSaleDetailDto } from './dto/create-sale_detail.dto';
import { UpdateSaleDetailDto } from './dto/update-sale_detail.dto';
import { SaleDetail } from './entities/sale_detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SaleDetailService {
  constructor(@InjectRepository(SaleDetail) private repo: Repository<SaleDetail>) {}

  create(dto: CreateSaleDetailDto): Promise<SaleDetail> {
    const ent = this.repo.create(dto);
    return this.repo.save(ent);
  }

  async findById(id: number): Promise<SaleDetail> {
    const ent = await this.repo.findOneBy({ detail_id: id });
    if (!ent) throw new Error('Detalle de venta no encontrado');
    return ent;
  }

  async update(id: number, dto: UpdateSaleDetailDto): Promise<SaleDetail> {
    const ent = await this.repo.findOneBy({ detail_id: id });
    if (!ent) throw new Error('Detalle de venta no encontrado');
    Object.assign(ent, dto);
    return this.repo.save(ent);
  }

  async replace(id: number, dto: CreateSaleDetailDto): Promise<SaleDetail> {
    const ent = await this.repo.findOneBy({ detail_id: id });
    if (!ent) throw new Error('Detalle de venta no encontrado');
    ent.fk_sale_detail_sale = dto.sale_id;
    ent.fk_sale_detail_product = dto.product_id;
    ent.quantity = dto.quantity;
    ent.subtotal = dto.subtotal;
    return this.repo.save(ent);
  }

  async delete(id: number): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new Error('Detalle de venta no encontrado');
  }
}
