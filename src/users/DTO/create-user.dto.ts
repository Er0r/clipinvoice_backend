import { IsNotEmpty } from "class-validator";
import { IsEmail } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
    
    @IsNotEmpty()
    role: string;

    @IsNotEmpty()
    status: string;
}