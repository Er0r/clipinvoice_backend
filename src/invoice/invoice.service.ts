import { Injectable } from '@nestjs/common';
import { InvoiceEntity } from './invoice.entity';
import { CreateInvoiceDto } from './DTO/create-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';


@Injectable()
export class InvoiceService {
    constructor(@InjectRepository(InvoiceEntity) private readonly invoiceRepository: Repository<InvoiceEntity>) {  } 

    async createInvoice(currentUser: User, createInvoiceDto: CreateInvoiceDto): Promise<InvoiceEntity> { 
        try{
            const invoice = new InvoiceEntity();
            Object.assign(invoice, createInvoiceDto);
            invoice.user = currentUser;
            return await this.invoiceRepository.save(invoice);
        } catch (err) {
            console.log(err);
        }
    }

    async getInvoices(currentUser: User): Promise<InvoiceEntity[]> { 
        try{
            return await this.invoiceRepository.find({ user: currentUser });
        } catch (err) {
            console.log(err);
        }
    }
}
