"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumersModule = void 0;
const common_1 = require("@nestjs/common");
const consumers_service_1 = require("./consumers.service");
const consumers_controller_1 = require("./consumers.controller");
const typeorm_1 = require("@nestjs/typeorm");
const consumers_entity_1 = require("./consumers.entity");
const auth_guard_1 = require("../users/guards/auth.guard");
const user_entity_1 = require("../users/user.entity");
let ConsumersModule = class ConsumersModule {
};
ConsumersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, consumers_entity_1.ConsumerEntity])],
        controllers: [consumers_controller_1.ConsumersController],
        providers: [consumers_service_1.ConsumersService, auth_guard_1.AuthGuard],
    })
], ConsumersModule);
exports.ConsumersModule = ConsumersModule;
//# sourceMappingURL=consumers.module.js.map