import {PrimaryGeneratedColumn, Entity, Column, ManyToOne, OneToMany, CreateDateColumn, BeforeUpdate} from 'typeorm';
import { User } from 'src/users/user.entity';
import { ProductEntity } from 'src/products/products.entity';

@Entity('invoices')
export class InvoiceEntity { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column()
    slug: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @BeforeUpdate() 
    updateTimestamp() { 
        this.updated_at = new Date();
    }

    @ManyToOne(() => User, user => user.invoices)
    user: User;

    @OneToMany(() => ProductEntity, product => product.invoices)
    product: ProductEntity;
}