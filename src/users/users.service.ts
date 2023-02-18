import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { name, email, password, role, status } = createUserDto;

      const saltOrRounds = 16;
      const hashedPassword = await bcrypt.hash(password, saltOrRounds);

      const new_user = {
        name,
        email,
        password: hashedPassword,
        role,
        status,
      };

      return await this.usersRepository.save(new_user);
    } catch (error) {
      throw error;
    }
  }
}
