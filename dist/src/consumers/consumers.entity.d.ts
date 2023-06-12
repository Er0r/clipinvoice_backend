import { InvoiceEntity } from 'src/invoice/invoice.entity';
import { CompanyEntity } from 'src/company/company.entity';
export declare class ConsumerEntity {
    id: number;
    name: string;
    phone_number: string;
    address: string;
    created_by: number;
    company: CompanyEntity;
    invoices: InvoiceEntity[];
}
