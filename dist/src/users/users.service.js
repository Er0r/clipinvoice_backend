"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const exceptions_1 = require("@nestjs/common/exceptions");
const enums_1 = require("@nestjs/common/enums");
const bcrypt_1 = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
        this.buildUserResponse = (user) => {
            return {
                user: Object.assign(Object.assign({}, user), { token: this.generateJWT(user) })
            };
        };
    }
    async registerAdmin(createUserDto) {
        try {
            const userByEmail = await this.usersRepository.findOne({ email: createUserDto.email });
            if (userByEmail) {
                throw new exceptions_1.HttpException('User with this email already exists', enums_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
            const newUser = new user_entity_1.User();
            Object.assign(newUser, createUserDto);
            newUser.role = 'super_admin';
            return await this.usersRepository.save(newUser);
        }
        catch (error) {
            throw error;
        }
    }
    async register(createUserDto) {
        try {
            const userByEmail = await this.usersRepository.findOne({ email: createUserDto.email });
            if (userByEmail) {
                throw new exceptions_1.HttpException('User with this email already exists', enums_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
            const newUser = new user_entity_1.User();
            Object.assign(newUser, createUserDto);
            return await this.usersRepository.save(newUser);
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        const user = await this.usersRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.company', 'companies')
            .where('user.id = :id', { id: id })
            .select(['user.id', 'user.name', 'user.email', 'user.password', 'user.role', 'companies.id', 'companies.name'])
            .getOne();
        return user;
    }
    async getAllUsers(currentUser, type) {
        try {
            const users = await this.usersRepository
                .createQueryBuilder('user')
                .leftJoinAndSelect('user.company', 'companies')
                .where('companies.id = :id', { id: currentUser.company.id })
                .andWhere('user.role = :role', { role: type })
                .select(['user.id', 'user.name', 'user.email', 'user.password', 'user.role', 'companies.id', 'companies.name'])
                .getMany();
            return users;
        }
        catch (error) {
            throw error;
        }
    }
    async login(loginUserDto) {
        try {
            const user = await this.usersRepository
                .createQueryBuilder('user')
                .leftJoinAndSelect('user.company', 'companies')
                .where('user.email = :email', { email: loginUserDto.email })
                .select(['user.id', 'user.name', 'user.email', 'user.password', 'companies.id', 'user.role', 'companies.name'])
                .getOne();
            if (!user) {
                throw new exceptions_1.HttpException('User with this email does not exist', enums_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
            const isPasswordValid = await (0, bcrypt_1.compare)(loginUserDto.password, user.password);
            if (!isPasswordValid) {
                throw new exceptions_1.HttpException('Password is not valid', enums_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
            delete user.password;
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async updateCurrentUser(user, updateUserDto) {
        try {
            Object.assign(user, updateUserDto);
            return await this.usersRepository.save(user);
        }
        catch (error) {
            throw error;
        }
    }
    generateJWT(user) {
        return (0, jsonwebtoken_1.sign)({
            id: user.id,
            name: user.name,
            email: user.email,
        }, config_1.JWT_SECRET, { expiresIn: '1d' });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map