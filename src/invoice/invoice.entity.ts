import {PrimaryGeneratedColumn, Entity, Column, ManyToOne, OneToMany, CreateDateColumn, BeforeUpdate} from 'typeorm';
import { User } from 'src/users/user.entity';
import { CustomerEntity } from 'src/customers/customers.entity';

@Entity('invoices')
export class InvoiceEntity { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    total_product_price: number;

    @Column({nullable: true})
    vat: number;

    @Column({nullable: true})
    total_vat_price: number;

    @Column({nullable: true})
    delivery_fee: number;
    
    @Column()
    total: number;

    @Column({nullable: true})
    due: number;

    @Column({nullable: true})
    payment_status: string;

    @Column({nullable: true})
    note: string;

    @Column()
    slug: string;

    @Column({nullable: true})
    issued_at: Date;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @BeforeUpdate() 
    updateTimestamp() { 
        this.updated_at = new Date();
    }

    @Column({ type: 'text', transformer: {
        to: (value: any) => JSON.stringify(value),
        from: (value: any) => JSON.parse(value)
    }})
    products: any[];

    @ManyToOne(() => User, user => user.invoices)
    user: User;

    @ManyToOne(() => CustomerEntity, consumer => consumer.invoices)
    consumer: CustomerEntity;
}