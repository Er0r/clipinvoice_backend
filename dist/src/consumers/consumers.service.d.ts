import { Repository } from 'typeorm';
import { ConsumerEntity } from './consumers.entity';
import { CreateConsumerDto } from './DTO/create-consumer.dto';
import { User } from 'src/users/user.entity';
export declare class ConsumersService {
    private readonly consumerRepository;
    constructor(consumerRepository: Repository<ConsumerEntity>);
    register(user: User, createConsumerDto: CreateConsumerDto): Promise<ConsumerEntity>;
    fetch(user: User): Promise<ConsumerEntity[]>;
}
