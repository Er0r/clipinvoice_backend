import { Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(readonly productsService: ProductsService) {} 
    @Post()
    async create() {
        return this.productsService.create();
    }
}
