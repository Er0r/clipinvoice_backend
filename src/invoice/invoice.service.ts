import { Inject, Injectable } from '@nestjs/common';
import { InvoiceEntity } from './invoice.entity';
import { CreateInvoiceDto } from './DTO/create-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { CustomersService } from '../customers/customers.service';


@Injectable()
export class InvoiceService {
    constructor(
        @InjectRepository(InvoiceEntity)
        private readonly invoiceRepository: Repository<InvoiceEntity>,
        @Inject(CustomersService)
        private readonly customerRepository: CustomersService,
    ) {}

    async createInvoice(
        currentUser: User,
        createInvoiceDto: CreateInvoiceDto,
    ): Promise<InvoiceEntity> {
        try {
            const invoice = new InvoiceEntity();
            Object.assign(invoice, createInvoiceDto);
            invoice.user = currentUser;
            invoice.consumer =  await this.customerRepository.findOne(createInvoiceDto.consumerId);
            
            return await this.invoiceRepository.save(invoice);
        } catch (err) {
            console.log(err);
        }
    }

    async getInvoices(currentUser: User): Promise<InvoiceEntity[]> {
        try {
            return await this.invoiceRepository.find({
                where: { user: currentUser },
                relations: ['consumer'],
            });
        } catch (err) {
            console.log(err);
        }
    }

    async getInvoiceById(
        currentUser: User,
        id: number | string,
    ): Promise<InvoiceEntity> {
        try {
            if (isNaN(id as number)) {
                return await this.invoiceRepository.findOne({
                    where: { slug: id, user: currentUser },
                    relations: ['consumer']
                });
            } else {
                return await this.invoiceRepository.findOne({
                    where: { id, user: currentUser },
                    relations: ['consumer']
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    async deleteInvoices (currentUser: User, id: number[]) {
        try {
            for (let i = 0; i < id.length; i++) {
                await this.invoiceRepository.delete({ id: id[i], user: currentUser});
            }
            return { message: 'Invoices deleted successfully' };
        } catch (err) {
            console.log(err);
        }
    }
}
