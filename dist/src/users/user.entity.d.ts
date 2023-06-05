import { ProductEntity } from 'src/products/products.entity';
import { InvoiceEntity } from 'src/invoice/invoice.entity';
import { CompanyEntity } from 'src/company/company.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    hashPassword(): Promise<void>;
    products: ProductEntity[];
    invoices: InvoiceEntity[];
    company: CompanyEntity;
}
