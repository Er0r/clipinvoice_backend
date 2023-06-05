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
exports.InvoiceController = void 0;
const common_1 = require("@nestjs/common");
const invoice_service_1 = require("./invoice.service");
const auth_guard_1 = require("../users/guards/auth.guard");
const create_invoice_dto_1 = require("./DTO/create-invoice.dto");
const user_decorator_1 = require("../users/decorators/user.decorator");
const user_entity_1 = require("../users/user.entity");
const roles_decorator_1 = require("../users/roles/roles.decorator");
const role_enum_1 = require("../users/role/role.enum");
const swagger_1 = require("@nestjs/swagger");
let InvoiceController = class InvoiceController {
    constructor(invoiceService) {
        this.invoiceService = invoiceService;
    }
    async create(currentUser, createInvoiceDto) {
        return await this.invoiceService.createInvoice(currentUser, createInvoiceDto);
    }
    async getAllInvoices(currentUser) {
        return await this.invoiceService.getInvoices(currentUser);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.RolesType.ADMIN, role_enum_1.RolesType.SUPER_ADMIN),
    __param(0, (0, user_decorator_1.UserDecorator)()),
    __param(1, (0, common_1.Body)('invoice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, create_invoice_dto_1.CreateInvoiceDto]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.RolesType.ADMIN, role_enum_1.RolesType.SUPER_ADMIN),
    __param(0, (0, user_decorator_1.UserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "getAllInvoices", null);
InvoiceController = __decorate([
    (0, swagger_1.ApiTags)('invoice'),
    (0, common_1.Controller)('invoice'),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService])
], InvoiceController);
exports.InvoiceController = InvoiceController;
//# sourceMappingURL=invoice.controller.js.map