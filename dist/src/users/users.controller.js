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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./DTO/create-user.dto");
const login_user_dto_1 = require("./DTO/login-user.dto");
const user_decorator_1 = require("./decorators/user.decorator");
const user_entity_1 = require("./user.entity");
const auth_guard_1 = require("./guards/auth.guard");
const update_user_dto_1 = require("./DTO/update-user.dto");
const roles_decorator_1 = require("./roles/roles.decorator");
const role_guard_1 = require("./role/role.guard");
const role_enum_1 = require("./role/role.enum");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async registerAdmin(createUserDto) {
        const user = await this.usersService.registerAdmin(createUserDto);
        return await this.usersService.buildUserResponse(user);
    }
    async register(createUserDto) {
        const userData = await this.usersService.register(createUserDto);
        return await this.usersService.buildUserResponse(userData);
    }
    async login(loginUserDto) {
        const user = await this.usersService.login(loginUserDto);
        return await this.usersService.buildUserResponse(user);
    }
    async currentUser(user) {
        return this.usersService.buildUserResponse(user);
    }
    async getAllUsers(type, currentUser) {
        const users = await this.usersService.getAllUsers(currentUser, type);
        return users.map(user => this.usersService.buildUserResponse(user));
    }
    async updateCurrentUser(user, updateUserDto) {
        const updatedUser = await this.usersService.updateCurrentUser(user, updateUserDto);
        return this.usersService.buildUserResponse(updatedUser);
    }
};
__decorate([
    (0, common_1.Post)('admin/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "registerAdmin", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, roles_decorator_1.Roles)(role_enum_1.RolesType.SUPER_ADMIN, role_enum_1.RolesType.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RoleGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(role_enum_1.RolesType.SUPER_ADMIN, role_enum_1.RolesType.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, user_decorator_1.UserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "currentUser", null);
__decorate([
    (0, common_1.Get)(':type'),
    (0, roles_decorator_1.Roles)(role_enum_1.RolesType.SUPER_ADMIN, role_enum_1.RolesType.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Param)('type')),
    __param(1, (0, user_decorator_1.UserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Put)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, user_decorator_1.UserDecorator)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateCurrentUser", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map