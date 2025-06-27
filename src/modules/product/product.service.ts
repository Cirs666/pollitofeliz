import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async findById(id: number): Promise<Product> {
    const entity = await this.repo.findOneBy({ product_id: id });
    if (!entity) {
      throw new NotFoundException('Producto no encontrado');
    }
    return entity;
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product> {
    const prod = await this.repo.findOneBy({ product_id: id });
    if (!prod) throw new NotFoundException('Producto no encontrado');
    Object.assign(prod, dto);
    return this.repo.save(prod);
  }

  async replace(id: number, dto: CreateProductDto): Promise<Product> {
    const prod = await this.repo.findOneBy({ product_id: id });
    if (!prod) throw new NotFoundException('Producto no encontrado');
    prod.name_product = dto.name_product;
    prod.description = dto.description;
    prod.unit_price = dto.unit_price;
    prod.stock = dto.stock ?? prod.stock;
    return this.repo.save(prod);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Producto no encontrado');
  }
}
