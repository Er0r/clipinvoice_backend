import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/create-user.dto';
import { User } from './user.entity';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from 'src/config';
import { UserResponseInterface } from './types/userResponse.interface';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { compare } from 'bcrypt';
import { LoginUserDto } from './DTO/login-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) { }

  async registerAdmin (createUserDto: CreateUserDto): Promise<User> { 
    try {
      const userByEmail = await this.usersRepository.findOne({ email: createUserDto.email });
      if (userByEmail) {
        throw new HttpException('User with this email already exists', HttpStatus.UNPROCESSABLE_ENTITY);
      }
      const newUser = new User();
      Object.assign(newUser, createUserDto);
      newUser.role = 'super_admin';
      return await this.usersRepository.save(newUser);
    } catch (error) {
      throw error;
    }
  }

  async register(createUserDto: CreateUserDto): Promise<User> {
    try {
      const userByEmail = await this.usersRepository.findOne({ email: createUserDto.email });
      if (userByEmail) {
        throw new HttpException('User with this email already exists', HttpStatus.UNPROCESSABLE_ENTITY);
      }
      const newUser = new User();
      Object.assign(newUser, createUserDto);
      return await this.usersRepository.save(newUser);
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async login(loginUserDto: LoginUserDto): Promise<User> {
    try {
      const user = await this.usersRepository.findOne({ email: loginUserDto.email }, { select: ['id', 'name', 'email', 'password'] });
      if (!user) {
        throw new HttpException('User with this email does not exist', HttpStatus.UNPROCESSABLE_ENTITY);
      }

      const isPasswordValid = await compare(loginUserDto.password, user.password);

      if (!isPasswordValid) {
        throw new HttpException('Password is not valid', HttpStatus.UNPROCESSABLE_ENTITY);
      }

      delete user.password;
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateCurrentUser(user: User, updateUserDto: UpdateUserDto): Promise<User> { 
    try {
      Object.assign(user, updateUserDto);
      return await this.usersRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  generateJWT(user: User): string {
    return sign({
      id: user.id,
      name: user.name,
      email: user.email,
    }, JWT_SECRET, { expiresIn: '1d' });
  }

  buildUserResponse = (user: User): UserResponseInterface => {
    return {
      user: {
        ...user,
        token: this.generateJWT(user)
      }
    }
  }

}
