import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) { }

  async register(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = new User();
      Object.assign(newUser, createUserDto);
      return await this.usersRepository.save(newUser);
    } catch (error) {
      throw error;
    }
  }
}
