import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './DTO/create-invoice.dto';
import { User } from 'src/users/user.entity';
import { InvoiceEntity } from './invoice.entity';
export declare class InvoiceController {
    readonly invoiceService: InvoiceService;
    constructor(invoiceService: InvoiceService);
    create(currentUser: User, createInvoiceDto: CreateInvoiceDto): Promise<InvoiceEntity>;
    getAllInvoices(currentUser: User): Promise<InvoiceEntity[]>;
}
