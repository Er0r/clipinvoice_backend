import { Repository } from 'typeorm';
import { CustomerEntity } from './customers.entity';
import { CreateCustomerDto } from './DTO/create-customer.dto';
import { User } from 'src/users/user.entity';
export declare class CustomersService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<CustomerEntity>);
    register(user: User, createConsumerDto: CreateCustomerDto): Promise<CustomerEntity>;
    fetch(user: User): Promise<CustomerEntity[]>;
}
