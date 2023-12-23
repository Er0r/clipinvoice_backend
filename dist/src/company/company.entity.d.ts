import { User } from 'src/users/user.entity';
import { CustomerEntity } from 'src/customers/customers.entity';
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
    customers: CustomerEntity[];
}
