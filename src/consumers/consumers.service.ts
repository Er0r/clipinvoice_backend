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
    async fetch(user: User): Promise<ConsumerEntity[]> {
        try {
            const query = this.consumerRepository.createQueryBuilder('consumer')
                .where("consumer.created_by = :created_by", { created_by: user.id });
    
            const stream = await query.stream();
            let consumers = [];
    
            stream.on('data', (consumer) => {
                consumers.push(consumer);
            });
    
            return new Promise((resolve, reject) => {
                stream.on('end', () => {
                    resolve(consumers);
                });
    
                stream.on('error', (err) => {
                    reject(err);
                });
            });
    
        } catch (err) {
            throw err;
        }
    }
}
