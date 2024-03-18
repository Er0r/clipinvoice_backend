import { Injectable } from '@nestjs/common';
import { InvoiceEntity } from './invoice.entity';
import { CreateInvoiceDto } from './DTO/create-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';

@Injectable()
export class InvoiceService {
    constructor(
        @InjectRepository(InvoiceEntity)
        private readonly invoiceRepository: Repository<InvoiceEntity>,
    ) {}

    async createInvoice(
        currentUser: User,
        createInvoiceDto: CreateInvoiceDto,
    ): Promise<InvoiceEntity> {
        try {
            const invoice = new InvoiceEntity();
            Object.assign(invoice, createInvoiceDto);
            invoice.user = currentUser;
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
}
