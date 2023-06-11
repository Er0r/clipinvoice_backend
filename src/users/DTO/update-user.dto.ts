import {IsString, IsOptional} from 'class-validator';

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    status?: string;

    // add json type for company
    @IsString()
    @IsOptional()
    company?: string;

}