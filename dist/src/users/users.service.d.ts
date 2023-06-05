import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/create-user.dto';
import { User } from './user.entity';
import { UserResponseInterface } from './types/userResponse.interface';
import { LoginUserDto } from './DTO/login-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    registerAdmin(createUserDto: CreateUserDto): Promise<User>;
    register(createUserDto: CreateUserDto): Promise<User>;
    findById(id: number): Promise<User>;
    getAllUsers(currentUser: any, type: any): Promise<User[]>;
    login(loginUserDto: LoginUserDto): Promise<User>;
    updateCurrentUser(user: User, updateUserDto: UpdateUserDto): Promise<User>;
    generateJWT(user: User): string;
    buildUserResponse: (user: User) => UserResponseInterface;
}
