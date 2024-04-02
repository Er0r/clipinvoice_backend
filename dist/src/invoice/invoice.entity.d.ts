import { User } from 'src/users/user.entity';
import { CustomerEntity } from 'src/customers/customers.entity';
export declare class InvoiceEntity {
    id: number;
    total_product_price: number;
    vat: number;
    total_vat_price: number;
    delivery_fee: number;
    total: number;
    due: number;
    payment_status: string;
    note: string;
    slug: string;
    issued_at: Date;
    created_at: Date;
    updated_at: Date;
    updateTimestamp(): void;
    products: any[];
    user: User;
    consumer: CustomerEntity;
}
