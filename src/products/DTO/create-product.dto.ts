import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({ description: 'name', example: 'Egg' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'price', example: 10 })
    @IsNotEmpty()
    price: number;

    @ApiProperty({ description: 'type', example: 'Item' })
    @IsNotEmpty()
    type: string;

    @ApiProperty({ description: 'quantity', example: 1 })
    @IsNotEmpty()
    stock_quantity: number;
}