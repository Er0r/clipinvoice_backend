import { IsOptional } from "class-validator";

export class UpdateCompanyDto {
    @IsOptional()
    name ?: string;
    
    @IsOptional()
    logo ?: number;

    @IsOptional()
    phone_number ?: number;

    @IsOptional()
    email ?: string;

    @IsOptional()
    address: string;

    @IsOptional()
    created_at ?: Date;

    @IsOptional()
    updated_at ?: Date;

}