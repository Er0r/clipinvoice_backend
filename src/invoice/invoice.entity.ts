import {PrimaryGeneratedColumn, Entity, Column, ManyToOne, OneToMany, CreateDateColumn, BeforeUpdate} from 'typeorm';
import { User } from 'src/users/user.entity';

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

    @Column({ type: 'text', transformer: {
        to: (value: any) => JSON.stringify(value),
        from: (value: any) => JSON.parse(value)
    }})
    products: any[];

    @ManyToOne(() => User, user => user.invoices)
    user: User;

    
}