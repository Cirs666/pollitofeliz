import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'users', schema: 'public' })
@Unique(['username']) 
@Unique(['email'])    
export class User {
    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'user_id' })
    @Expose()
    user_id: number;

    @Column({ type: 'varchar', length: 100, name: 'username', unique: true })
    @Expose()
    username: string;

    @Column({ type: 'varchar', length: 150, name: 'password' })
    @Expose()
    password: string;

    @Column({ type: 'varchar', length: 150, name: 'email', unique: true })
    @Expose()
    email: string;
}