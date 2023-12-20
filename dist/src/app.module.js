"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const auth_middleware_1 = require("./users/middlewares/auth.middleware");
const invoice_module_1 = require("./invoice/invoice.module");
const products_module_1 = require("./products/products.module");
const company_module_1 = require("./company/company.module");
const consumers_module_1 = require("./consumers/consumers.module");
const ormconfig_1 = require("./ormconfig");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes({ path: '/products', method: common_1.RequestMethod.ALL }, { path: '/invoice', method: common_1.RequestMethod.ALL }, { path: '/company', method: common_1.RequestMethod.ALL }, { path: '/company/:id', method: common_1.RequestMethod.ALL }, { path: '/users/:type', method: common_1.RequestMethod.GET }, { path: '/users/:id', method: common_1.RequestMethod.PUT }, { path: '/consumers', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default), users_module_1.UsersModule, invoice_module_1.InvoiceModule, products_module_1.ProductsModule, company_module_1.CompanyModule, consumers_module_1.ConsumersModule],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map