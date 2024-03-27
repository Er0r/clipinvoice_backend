import { Injectable } from '@nestjs/common';
import { ProductEntity } from './products.entity';
import { CreateProductDto } from './DTO/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>) {  }
    async createProduct(currentUser: User, createProductDto: CreateProductDto): Promise<ProductEntity> {
        const product = new ProductEntity();
        Object.assign(product, createProductDto);
        product.user = currentUser;
        return await this.productRepository.save(product);
    }

    async getAllProducts(currentUser: User): Promise<ProductEntity[]> { 
        return await this.productRepository.find({ where: { user: currentUser } });
    }

    async updateProduct(id: number, currentUser: User, createProductDto: CreateProductDto): Promise<ProductEntity> {
        const product = await this.productRepository.findOne({ where: { id, user: currentUser } });
        Object.assign(product, createProductDto);
        return await this.productRepository.save(product);
    }
}
