import { Controller, Body, Get, Post, Put, ValidationPipe, UsePipes, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { LoginUserDto } from './DTO/login-user.dto';
import { UserResponseInterface } from './types/userResponse.interface';
import { UserDecorator } from './decorators/user.decorator';
import { User } from './user.entity';
import { AuthGuard } from './guards/auth.guard';
import { UpdateUserDto } from './DTO/update-user.dto';
import { Roles } from 'src/users/roles/roles.decorator';
import { RoleGuard } from 'src/users/role/role.guard';
import { RolesType } from 'src/users/role/role.enum';

@Controller()
export class UsersController {
    constructor( private usersService: UsersService) { }

    @Post('users/admin/register') 
    async registerAdmin(@Body() createUserDto: CreateUserDto): Promise<UserResponseInterface> { 
        const user = await this.usersService.registerAdmin(createUserDto);
        return await this.usersService.buildUserResponse(user);
    }

    @Post('users/register') 
    @UseGuards(AuthGuard, RoleGuard)
    @Roles(RolesType.ADMIN, RolesType.SUPER_ADMIN)
    @UsePipes(new ValidationPipe())
    async register(@UserDecorator() currentUser: User, @Body() createUserDto: CreateUserDto): Promise<UserResponseInterface> { 
        const user = await this.usersService.register(currentUser, createUserDto);
        return await this.usersService.buildUserResponse(user);
    }

    @Post('users/login')
    @UsePipes(new ValidationPipe())
    async login(@Body() loginUserDto: LoginUserDto): Promise<UserResponseInterface> { 
        const user = await this.usersService.login(loginUserDto);
        return await this.usersService.buildUserResponse(user);    
    }

    @Get('user')
    @UseGuards(AuthGuard)
    async currentUser(@UserDecorator() user: User): Promise<UserResponseInterface> {
        return this.usersService.buildUserResponse(user);
    }

    @Put('user') 
    @UseGuards(AuthGuard)
    async updateCurrentUser( @UserDecorator() user: User, @Body() updateUserDto: UpdateUserDto): Promise<UserResponseInterface> { 
        const updatedUser = await this.usersService.updateCurrentUser(user, updateUserDto);
        return this.usersService.buildUserResponse(updatedUser);
    }
}
