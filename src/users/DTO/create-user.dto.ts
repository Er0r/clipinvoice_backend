import { IsNotEmpty, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
    @ApiProperty({ description: 'name', example: 'Cleinsight Admin' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'email', example: 'admin@cleinsight.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'password', example: 'Cleinsight_Admin#2023' })
    @IsNotEmpty()
    password: string;
    
    @ApiProperty({ description: 'role', example: 'admin' })
    @IsNotEmpty()
    role: string;

    @ApiProperty({ description: 'status', example: 'active' })
    @IsNotEmpty()
    status: string;

    @ApiProperty({ description: 'company', example: { "id": "4", "name": "cleinsight"} })
    company?: string;    
}