import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'employe', schema: 'public' }) // Nota: El nombre de la tabla es 'employe'
export class Employee {
    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'employee_id' })
    @Expose()
    employee_id: number;

    @Column({ type: 'varchar', length: 100, name: 'name_employee' })
    @Expose()
    name_employee: string;

    @Column({ type: 'varchar', length: 50, name: 'type_employee' })
    @Expose()
    type_employee: string;

    @Column({ type: 'int', name: 'phone', nullable: false })
    @Expose()
    phone: number;
}