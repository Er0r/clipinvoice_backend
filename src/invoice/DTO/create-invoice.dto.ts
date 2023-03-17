import { IsNotEmpty } from "class-validator";

export class CreateInvoiceDto {
    @IsNotEmpty()
    total: number;

    @IsNotEmpty()
    slug: string;

    @IsNotEmpty()
    readonly products: [];
}