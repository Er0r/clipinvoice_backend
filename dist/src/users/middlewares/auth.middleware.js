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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../config");
const users_service_1 = require("../users.service");
let AuthMiddleware = class AuthMiddleware {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async use(req, _, next) {
        if (!req.headers.authorization) {
            req.user = null;
            next();
        }
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decode = await (0, jsonwebtoken_1.verify)(token, config_1.JWT_SECRET);
            const user = await this.usersService.findById(decode.id);
            req.user = user;
            next();
        }
        catch (error) {
            req.user = null;
            next();
        }
    }
};
AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map