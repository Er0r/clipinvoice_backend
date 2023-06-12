import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsumerEntity } from './consumers.entity';
import { CreateConsumerDto } from './DTO/create-consumer.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class ConsumersService {
    constructor( 
        @InjectRepository(ConsumerEntity) private readonly consumerRepository: Repository<ConsumerEntity>
    ){  }

    async register(user: User, createConsumerDto: CreateConsumerDto): Promise<ConsumerEntity> { 
        try { 
            const consumer = new ConsumerEntity();
            consumer.created_by = user.id;
            if(user.company != null) {
                consumer.company = user.company;
            }
            
            Object.assign(consumer, createConsumerDto);
        
            let createConsumer = await this.consumerRepository.save(consumer);
            return createConsumer;

        } catch (error) {
            throw error;
        }
    }
}
