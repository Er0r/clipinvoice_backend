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
exports.ConsumersController = void 0;
const common_1 = require("@nestjs/common");
const consumers_service_1 = require("./consumers.service");
const create_consumer_dto_1 = require("./DTO/create-consumer.dto");
const roles_decorator_1 = require("../users/roles/roles.decorator");
const role_enum_1 = require("../users/role/role.enum");
const auth_guard_1 = require("../users/guards/auth.guard");
const role_guard_1 = require("../users/role/role.guard");
const user_entity_1 = require("../users/user.entity");
const user_decorator_1 = require("../users/decorators/user.decorator");
let ConsumersController = class ConsumersController {
    constructor(consumersService) {
        this.consumersService = consumersService;
    }
    async register(user, createConsumerDto) {
        return await this.consumersService.register(user, createConsumerDto);
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, roles_decorator_1.Roles)(role_enum_1.RolesType.SUPER_ADMIN, role_enum_1.RolesType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RoleGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, user_decorator_1.UserDecorator)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, create_consumer_dto_1.CreateConsumerDto]),
    __metadata("design:returntype", Promise)
], ConsumersController.prototype, "register", null);
ConsumersController = __decorate([
    (0, common_1.Controller)('consumers'),
    __metadata("design:paramtypes", [consumers_service_1.ConsumersService])
], ConsumersController);
exports.ConsumersController = ConsumersController;
//# sourceMappingURL=consumers.controller.js.map