import { Controller, Body, Get, Post, Put, ValidationPipe, UsePipes, UseGuards, Param } from '@nestjs/common';
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
import { ApiTags }  from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor( private usersService: UsersService) { }

    @Post('admin/register') 
    async registerAdmin(@Body() createUserDto: CreateUserDto): Promise<UserResponseInterface> { 
        const user = await this.usersService.registerAdmin(createUserDto);
        return await this.usersService.buildUserResponse(user);
    }

    @Post('register') 
    @UsePipes(new ValidationPipe())
    async register(@Body() createUserDto: CreateUserDto): Promise<UserResponseInterface> { 
        const userData = await this.usersService.register(createUserDto);
        return await this.usersService.buildUserResponse(userData);
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Body() loginUserDto: LoginUserDto): Promise<UserResponseInterface> { 
        const user = await this.usersService.login(loginUserDto);
        return await this.usersService.buildUserResponse(user);    
    }

    @Get()
    @Roles(RolesType.SUPER_ADMIN, RolesType.USER)
    @UseGuards(AuthGuard, RoleGuard)
    async currentUser(@UserDecorator() user: User): Promise<UserResponseInterface> {
        return this.usersService.buildUserResponse(user);
    }

    @Get(':type') 
    @Roles(RolesType.SUPER_ADMIN, RolesType.USER)
    @UseGuards(AuthGuard, RoleGuard)
    async getAllUsers( @Param('type') type: string, @UserDecorator() currentUser: User): Promise<UserResponseInterface[]> { 
        const users = await this.usersService.getAllUsers(currentUser, type);
        return users.map(user => this.usersService.buildUserResponse(user));
    }

    @Put(':id')
    @Roles(RolesType.SUPER_ADMIN, RolesType.USER)
    @UseGuards(AuthGuard, RoleGuard)
    async updateCurrentUser( @UserDecorator() user: User, @Body() updateUserDto: UpdateUserDto): Promise<UserResponseInterface> { 
        const updatedUser = await this.usersService.updateCurrentUser(user, updateUserDto);
        return this.usersService.buildUserResponse(updatedUser);

    }
}
