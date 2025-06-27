import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'Sale_detail', schema: 'public' })
export class SaleDetail {
    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'detail_id' })
    @Expose()
    detail_id: number;

    @Column({ type: 'int', name: 'quantity' })
    @Expose()
    quantity: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, name: 'subtotal' })
    @Expose()
    subtotal: number;

    @Column({ type: 'int', name: 'fk_sale_detail_sale', nullable: false })
    @Expose()
    fk_sale_detail_sale: number;

    @Column({ type: 'int', name: 'fk_sale_detail_product', nullable: false })
    @Expose()
    fk_sale_detail_product: number;
}