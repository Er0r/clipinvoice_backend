import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from 'src/users/user.entity';
import { ConsumerEntity } from 'src/consumers/consumers.entity';

@Entity('companies')
export class CompanyEntity { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    logo?: string;

    @Column()
    phone_number: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(() => User, user => user.company)
    users: User[];

    @OneToMany(() => ConsumerEntity, consumer => consumer.company)
    consumers: ConsumerEntity[];
}