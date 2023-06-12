import { ConsumersService } from './consumers.service';
import { CreateConsumerDto } from './DTO/create-consumer.dto';
import { ConsumerEntity } from './consumers.entity';
import { User } from 'src/users/user.entity';
export declare class ConsumersController {
    private readonly consumersService;
    constructor(consumersService: ConsumersService);
    register(user: User, createConsumerDto: CreateConsumerDto): Promise<ConsumerEntity>;
}
