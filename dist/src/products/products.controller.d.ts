import { ProductsService } from './products.service';
import { CreateProductDto } from './DTO/create-product.dto';
import { User } from 'src/users/user.entity';
import { ProductEntity } from './products.entity';
export declare class ProductsController {
    readonly productsService: ProductsService;
    constructor(productsService: ProductsService);
    create(currentUser: User, createProductDto: CreateProductDto): Promise<ProductEntity>;
    getAll(currentUser: User): Promise<ProductEntity[]>;
    update(currentUser: User, id: number, createProductDto: CreateProductDto): Promise<ProductEntity>;
}
