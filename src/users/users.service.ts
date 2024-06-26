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
import { CompanyEntity } from 'src/company/company.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(CompanyEntity)  private readonly companyRepository: Repository<CompanyEntity>, 
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
      let user = await this.usersRepository.save(newUser);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<User> {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.company', 'companies')
      .where('user.id = :id', { id: id })
      .select(['user.id', 'user.name', 'user.email', 'user.password', 'user.role', 'companies.id', 'companies.name'])
      .getOne();
    return user;
  }

  async getAllUsers(currentUser, type): Promise<User[]> { 
    try {
     // fetch all users of the same company
      const users = await this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.company', 'companies')
      .where('companies.id = :id', { id: currentUser.company.id })
      .andWhere('user.role = :role', { role: type })
      .select(['user.id', 'user.name', 'user.email', 'user.password', 'user.role', 'companies.id', 'companies.name'])
      .getMany();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<User> {
    try {
      const user = await this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.company', 'companies')
      .where('user.email = :email', { email: loginUserDto.email })
      .select(['user.id', 'user.name', 'user.email', 'user.password', 'companies.id', 'user.role', 'companies.name'])
      .getOne();
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
      if (updateUserDto.company) {
        // find company by name
        const company = await this.companyRepository.findOne({ id: updateUserDto.company.id });
        if (!company) {
          throw new HttpException('Company with this name does not exist', HttpStatus.UNPROCESSABLE_ENTITY);
        } else {
          updateUserDto.company.id = (company.id);
        }
      }
  
      Object.assign(user, updateUserDto);
      const updatedUser = await this.usersRepository.save(user);
      return this.findById(updatedUser.id);
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
