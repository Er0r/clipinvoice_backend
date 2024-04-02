import { IsNotEmpty } from "class-validator";

export class CreateInvoiceDto {
    vat ?: number;
    
    total_product_price ?: number;
    
    total_vat_price ?: number;
    
    delivery_fee ?: number;
    
    @IsNotEmpty()
    total: number;
    
    due ?: number;
    
    payment_status ?: string;
    
    note ?: string;

    @IsNotEmpty()
    slug: string;

    @IsNotEmpty()
    readonly products: [];

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    consumerId: number;

    @IsNotEmpty()
    issued_at: Date;
}
