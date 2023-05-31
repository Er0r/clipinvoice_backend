import { IsNotEmpty } from "class-validator";

export class CreateCompanyDto {
    @IsNotEmpty()
    name: string;

    logo ?: number;

    phone_number ?: number;

    email: string;

    @IsNotEmpty()
    address: string;

    created_at ?: Date;

    updated_at ?: Date;

}