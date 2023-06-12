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
exports.ConsumerEntity = void 0;
const typeorm_1 = require("typeorm");
const invoice_entity_1 = require("../invoice/invoice.entity");
const company_entity_1 = require("../company/company.entity");
let ConsumerEntity = class ConsumerEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ConsumerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ConsumerEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ConsumerEntity.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ConsumerEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ConsumerEntity.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.CompanyEntity, (company) => company.consumers),
    __metadata("design:type", company_entity_1.CompanyEntity)
], ConsumerEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => invoice_entity_1.InvoiceEntity, (invoice) => invoice.user),
    __metadata("design:type", Array)
], ConsumerEntity.prototype, "invoices", void 0);
ConsumerEntity = __decorate([
    (0, typeorm_1.Entity)('consumer')
], ConsumerEntity);
exports.ConsumerEntity = ConsumerEntity;
//# sourceMappingURL=consumers.entity.js.map