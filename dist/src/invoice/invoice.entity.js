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
exports.InvoiceEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const customers_entity_1 = require("../customers/customers.entity");
let InvoiceEntity = class InvoiceEntity {
    updateTimestamp() {
        this.updated_at = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InvoiceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], InvoiceEntity.prototype, "total_product_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], InvoiceEntity.prototype, "vat", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], InvoiceEntity.prototype, "total_vat_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], InvoiceEntity.prototype, "delivery_fee", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], InvoiceEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], InvoiceEntity.prototype, "due", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InvoiceEntity.prototype, "payment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InvoiceEntity.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InvoiceEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], InvoiceEntity.prototype, "issued_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InvoiceEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InvoiceEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoiceEntity.prototype, "updateTimestamp", null);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', transformer: {
            to: (value) => JSON.stringify(value),
            from: (value) => JSON.parse(value)
        } }),
    __metadata("design:type", Array)
], InvoiceEntity.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.invoices),
    __metadata("design:type", user_entity_1.User)
], InvoiceEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customers_entity_1.CustomerEntity, consumer => consumer.invoices),
    __metadata("design:type", customers_entity_1.CustomerEntity)
], InvoiceEntity.prototype, "consumer", void 0);
InvoiceEntity = __decorate([
    (0, typeorm_1.Entity)('invoices')
], InvoiceEntity);
exports.InvoiceEntity = InvoiceEntity;
//# sourceMappingURL=invoice.entity.js.map