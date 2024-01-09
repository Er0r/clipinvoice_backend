import { IsNotEmpty } from "class-validator";

export class CreateInvoiceDto {
    @IsNotEmpty()
    total: number;

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
