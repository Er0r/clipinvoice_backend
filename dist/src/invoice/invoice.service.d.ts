import { InvoiceEntity } from './invoice.entity';
import { CreateInvoiceDto } from './DTO/create-invoice.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
export declare class InvoiceService {
    private readonly invoiceRepository;
    constructor(invoiceRepository: Repository<InvoiceEntity>);
    createInvoice(currentUser: User, createInvoiceDto: CreateInvoiceDto): Promise<InvoiceEntity>;
    getInvoices(currentUser: User): Promise<InvoiceEntity[]>;
    getInvoiceById(currentUser: User, id: number | string): Promise<InvoiceEntity>;
}
