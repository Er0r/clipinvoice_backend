import { Controller, Body, Get, Req, Post, ValidationPipe, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { LoginUserDto } from './DTO/login-user.dto';
import { UserResponseInterface } from './types/userResponse.interface';
import { Request } from 'express';
import { ExpressRequest } from 'src/types/expressRequest.interface';
import { UserDecorator } from './decorators/user.decorator';
import { User } from './user.entity';

@Controller()
export class UsersController {
    constructor( private usersService: UsersService) { }

    @Post('users/register') 
    @UsePipes(new ValidationPipe())
    async register(@Body() createUserDto: CreateUserDto): Promise<UserResponseInterface> { 
        const user = await this.usersService.register(createUserDto);
        return await this.usersService.buildUserResponse(user);
    }

    @Post('users/login')
    @UsePipes(new ValidationPipe())
    async login(@Body() loginUserDto: LoginUserDto): Promise<UserResponseInterface> { 
        const user = await this.usersService.login(loginUserDto);
        return await this.usersService.buildUserResponse(user);    
    }

    @Get('user')
    async currentUser(@UserDecorator() user: User): Promise<UserResponseInterface> {
        return this.usersService.buildUserResponse(user);
    }
}
