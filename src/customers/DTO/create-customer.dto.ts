import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCustomerDto {
    @ApiProperty({ description: 'name', example: 'Test-Consumer' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'phone_number', example: '1234567890' })
    @IsNotEmpty()
    phone_number: string;

    @ApiProperty({ description: 'address', example: 'Test-Address' })
    @IsNotEmpty()
    address: string;
    lane1 ?: string;
    lane2 ?: string;
    upozila ?: string;
    district ?: string;
    division ?: string;

}