import { InvoiceEntity } from 'src/invoice/invoice.entity';
import { CompanyEntity } from 'src/company/company.entity';
export declare class CustomerEntity {
    id: number;
    name: string;
    phone_number: string;
    address: string;
    lane1: string;
    lane2: string;
    upozila: string;
    district: string;
    division: string;
    created_by: number;
    company: CompanyEntity;
    invoices: InvoiceEntity[];
}
