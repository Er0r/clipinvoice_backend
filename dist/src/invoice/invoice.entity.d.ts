import { User } from 'src/users/user.entity';
import { ConsumerEntity } from 'src/consumers/consumers.entity';
export declare class InvoiceEntity {
    id: number;
    total: number;
    slug: string;
    created_at: Date;
    updated_at: Date;
    updateTimestamp(): void;
    products: any[];
    user: User;
    consumer: ConsumerEntity;
}
