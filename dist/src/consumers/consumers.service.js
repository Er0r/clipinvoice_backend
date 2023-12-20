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
exports.ConsumersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const consumers_entity_1 = require("./consumers.entity");
let ConsumersService = class ConsumersService {
    constructor(consumerRepository) {
        this.consumerRepository = consumerRepository;
    }
    async register(user, createConsumerDto) {
        try {
            const consumer = new consumers_entity_1.ConsumerEntity();
            consumer.created_by = user.id;
            if (user.company != null) {
                consumer.company = user.company;
            }
            Object.assign(consumer, createConsumerDto);
            let createConsumer = await this.consumerRepository.save(consumer);
            return createConsumer;
        }
        catch (error) {
            throw error;
        }
    }
    async fetch(user) {
        try {
            const query = this.consumerRepository.createQueryBuilder('consumer')
                .where("consumer.created_by = :created_by", { created_by: user.id });
            const stream = await query.stream();
            let consumers = [];
            stream.on('data', (consumer) => {
                consumers.push(consumer);
            });
            return new Promise((resolve, reject) => {
                stream.on('end', () => {
                    resolve(consumers);
                });
                stream.on('error', (err) => {
                    reject(err);
                });
            });
        }
        catch (err) {
            throw err;
        }
    }
};
ConsumersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consumers_entity_1.ConsumerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConsumersService);
exports.ConsumersService = ConsumersService;
//# sourceMappingURL=consumers.service.js.map