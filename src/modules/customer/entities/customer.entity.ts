import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'customer', schema: 'public' })
export class Customer {
    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'customer_id' })
    @Expose()
    customer_id: number;

    @Column({ type: 'varchar', length: 100, name: 'name_customer' })
    @Expose()
    name_customer: string;

    @Column({ type: 'int', name: 'phone', nullable: false })
    @Expose()
    phone: number;

    @Column({ type: 'varchar', length: 150, name: 'address', nullable: false })
    @Expose()
    address: string;
}