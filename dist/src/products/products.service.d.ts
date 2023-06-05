import { ProductEntity } from './products.entity';
import { CreateProductDto } from './DTO/create-product.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    createProduct(currentUser: User, createProductDto: CreateProductDto): Promise<ProductEntity>;
    getAllProducts(currentUser: User): Promise<ProductEntity[]>;
}
