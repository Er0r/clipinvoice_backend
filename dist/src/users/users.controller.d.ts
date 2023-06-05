import { UsersService } from './users.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { LoginUserDto } from './DTO/login-user.dto';
import { UserResponseInterface } from './types/userResponse.interface';
import { User } from './user.entity';
import { UpdateUserDto } from './DTO/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    registerAdmin(createUserDto: CreateUserDto): Promise<UserResponseInterface>;
    register(createUserDto: CreateUserDto): Promise<UserResponseInterface>;
    login(loginUserDto: LoginUserDto): Promise<UserResponseInterface>;
    currentUser(user: User): Promise<UserResponseInterface>;
    getAllUsers(type: string, currentUser: User): Promise<UserResponseInterface[]>;
    updateCurrentUser(user: User, updateUserDto: UpdateUserDto): Promise<UserResponseInterface>;
}
