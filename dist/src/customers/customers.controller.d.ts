import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './DTO/create-customer.dto';
import { CustomerEntity } from './customers.entity';
import { User } from 'src/users/user.entity';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    register(user: User, createCustomerDto: CreateCustomerDto): Promise<CustomerEntity>;
    fetchUser(user: User): Promise<CustomerEntity[]>;
}
