import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customers.entity';
import { CreateCustomerDto } from './DTO/create-customer.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(CustomerEntity) private readonly customerRepository: Repository<CustomerEntity>
    ) { }

    async register(user: User, createConsumerDto: CreateCustomerDto): Promise<CustomerEntity> { 
        try { 
            const consumer = new CustomerEntity();
            consumer.created_by = user.id;
            if(user.company != null) {
                consumer.company = user.company;
            }
            
            Object.assign(consumer, createConsumerDto);
        
            let createConsumer = await this.customerRepository.save(consumer);
            return createConsumer;

        } catch (error) {
            throw error;
        }
    }

    async findOne(id: number): Promise<CustomerEntity> { 
        try {
            return await this.customerRepository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    async fetch(user: User): Promise<CustomerEntity[]> {
        try {
            const query = this.customerRepository.createQueryBuilder('consumer')
                .where("consumer.created_by = :created_by", { created_by: user.id });
    
            const stream = await query.stream();
            let customers = [];
    
            stream.on('data', (consumer) => {
                customers.push(consumer);
            });
    
            return new Promise((resolve, reject) => {
                stream.on('end', () => {
                    resolve(customers);
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
