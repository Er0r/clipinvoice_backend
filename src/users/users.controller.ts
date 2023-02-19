import { Controller, Body, Post, ValidationPipe, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserResponseInterface } from './types/userResponse.interface';

@Controller('users')
export class UsersController {
    constructor( private usersService: UsersService) { }

    @Post('register') 
    @UsePipes(new ValidationPipe())
    async register(@Body() createUserDto: CreateUserDto): Promise<UserResponseInterface> { 
        const user = await this.usersService.register(createUserDto);
        return await this.usersService.buildUserResponse(user);
    }
}
