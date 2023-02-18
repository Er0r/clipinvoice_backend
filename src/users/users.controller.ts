import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor( private usersService: UsersService) { }

    @Post('register') 
    async register(@Body() createUserDto: CreateUserDto): Promise<User> { 
        console.log(createUserDto);
        return await this.usersService.register(createUserDto);
    }
}
