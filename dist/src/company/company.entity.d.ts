import { User } from 'src/users/user.entity';
import { ConsumerEntity } from 'src/consumers/consumers.entity';
export declare class CompanyEntity {
    id: number;
    name: string;
    logo?: string;
    phone_number: string;
    email: string;
    address: string;
    created_at: Date;
    updated_at: Date;
    users: User[];
    consumers: ConsumerEntity[];
}
