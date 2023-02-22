import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    async create() {
        return "Create Product From Service";
    }
}
