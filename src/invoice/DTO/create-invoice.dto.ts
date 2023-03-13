import { IsNotEmpty } from "class-validator";
import { ProductEntity } from "src/products/products.entity";

export class CreateInvoiceDto {
    @IsNotEmpty()
    total: number;

    @IsNotEmpty()
    slug: string;

    @IsNotEmpty()
    readonly product: ProductEntity[];
}
