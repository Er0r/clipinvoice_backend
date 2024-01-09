import { BeforeUpdate, Column, Entity, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity('products')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    // column can be nullable
    @Column({ nullable: true })
    type: string;

    @Column()
    stock_quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @BeforeUpdate() 
    updateTimestamp() { 
        this.updated_at = new Date();
    }

    @ManyToOne(() => User, user => user.products)
    user: User;

}