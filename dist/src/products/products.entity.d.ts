import { User } from 'src/users/user.entity';
export declare class ProductEntity {
    id: number;
    name: string;
    price: number;
    type: string;
    stock_quantity: number;
    created_at: Date;
    updated_at: Date;
    updateTimestamp(): void;
    user: User;
}
