import { InvoiceEntity } from './invoice.entity';
import { CreateInvoiceDto } from './DTO/create-invoice.dto';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { CustomersService } from '../customers/customers.service';
export declare class InvoiceService {
    private readonly invoiceRepository;
    private readonly customerRepository;
    constructor(invoiceRepository: Repository<InvoiceEntity>, customerRepository: CustomersService);
    createInvoice(currentUser: User, createInvoiceDto: CreateInvoiceDto): Promise<InvoiceEntity>;
    getInvoices(currentUser: User): Promise<InvoiceEntity[]>;
    getInvoiceById(currentUser: User, id: number | string): Promise<InvoiceEntity>;
}
