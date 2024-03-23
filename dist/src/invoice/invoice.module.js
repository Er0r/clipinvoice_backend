"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const invoice_controller_1 = require("./invoice.controller");
const invoice_entity_1 = require("./invoice.entity");
const invoice_service_1 = require("./invoice.service");
const customers_module_1 = require("../customers/customers.module");
let InvoiceModule = class InvoiceModule {
};
InvoiceModule = __decorate([
    (0, common_1.Module)({
        imports: [customers_module_1.CustomersModule, typeorm_1.TypeOrmModule.forFeature([invoice_entity_1.InvoiceEntity])],
        controllers: [invoice_controller_1.InvoiceController],
        providers: [invoice_service_1.InvoiceService]
    })
], InvoiceModule);
exports.InvoiceModule = InvoiceModule;
//# sourceMappingURL=invoice.module.js.map