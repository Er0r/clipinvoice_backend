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
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const invoice_entity_1 = require("./invoice.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customers_service_1 = require("../customers/customers.service");
let InvoiceService = class InvoiceService {
    constructor(invoiceRepository, customerRepository) {
        this.invoiceRepository = invoiceRepository;
        this.customerRepository = customerRepository;
    }
    async createInvoice(currentUser, createInvoiceDto) {
        try {
            const invoice = new invoice_entity_1.InvoiceEntity();
            Object.assign(invoice, createInvoiceDto);
            invoice.user = currentUser;
            invoice.consumer = await this.customerRepository.findOne(createInvoiceDto.consumerId);
            return await this.invoiceRepository.save(invoice);
        }
        catch (err) {
            console.log(err);
        }
    }
    async getInvoices(currentUser) {
        try {
            return await this.invoiceRepository.find({
                where: { user: currentUser },
                relations: ['consumer'],
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async getInvoiceById(currentUser, id) {
        try {
            if (isNaN(id)) {
                return await this.invoiceRepository.findOne({
                    where: { slug: id, user: currentUser },
                    relations: ['consumer']
                });
            }
            else {
                return await this.invoiceRepository.findOne({
                    where: { id, user: currentUser },
                    relations: ['consumer']
                });
            }
        }
        catch (err) {
            console.log(err);
        }
    }
};
InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invoice_entity_1.InvoiceEntity)),
    __param(1, (0, common_1.Inject)(customers_service_1.CustomersService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        customers_service_1.CustomersService])
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map