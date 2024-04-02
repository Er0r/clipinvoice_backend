export declare class CreateInvoiceDto {
    vat?: number;
    total_product_price?: number;
    total_vat_price?: number;
    delivery_fee?: number;
    total: number;
    due?: number;
    payment_status?: string;
    note?: string;
    slug: string;
    readonly products: [];
    userId: number;
    consumerId: number;
    issued_at: Date;
}
