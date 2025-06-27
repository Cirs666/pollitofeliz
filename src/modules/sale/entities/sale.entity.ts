import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Sale', schema: 'public' })
export class Sale {
    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'sale_id' })
    @Expose()
    sale_id: number;

    @Column({ type: 'date', name: 'sale_date', default: () => 'CURRENT_TIMESTAMP' })
    @Expose()
    sale_date: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2, name: 'total' })
    @Expose()
    total: number;

    @Column({ type: 'int', name: 'fk_sale_customer', nullable: false })
    @Expose()
    fk_sale_customer: number;

    @Column({ type: 'int', name: 'fk_sale_employee', nullable: false })
    @Expose()
    fk_sale_employee: number;
}