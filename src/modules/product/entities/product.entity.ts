import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product', schema: 'public' })
export class Product {
    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'product_id' })
    @Expose()
    product_id: number;

    @Column({ type: 'varchar', length: 100, name: 'name_product' })
    @Expose()
    name_product: string;

    @Column({ type: 'text', name: 'description', nullable: false})
    @Expose()
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, name: 'unit_price' })
    @Expose()
    unit_price: number;

    @Column({ type: 'int', name: 'stock', default: 0 })
    @Expose()
    stock: number;
}