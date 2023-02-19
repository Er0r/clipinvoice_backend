import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from 'src/config';
import { UserResponseInterface } from './types/userResponse.interface';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) { }

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
