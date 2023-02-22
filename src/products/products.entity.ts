import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @BeforeUpdate() 
    updateTimestamp() { 
        this.updatedAt = new Date();
    }
}