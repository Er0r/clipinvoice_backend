import { Controller, Body, Post, UseGuards, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from '../users/guards/auth.guard';
import { CreateProductDto } from './DTO/create-product.dto';
import { UserDecorator } from '../users/decorators/user.decorator';
import { User } from 'src/users/user.entity';
import { ProductEntity } from './products.entity';
import { Roles } from 'src/users/roles/roles.decorator';
import { RoleGuard } from 'src/users/role/role.guard';
import { RolesType } from 'src/users/role/role.enum';


@Controller('products')
export class ProductsController {
    constructor(readonly productsService: ProductsService) {} 
    
    @Post()
    @UseGuards(AuthGuard)
    @Roles(RolesType.ADMIN, RolesType.SUPER_ADMIN)
    async create(@UserDecorator() currentUser: User,  @Body('product') createProductDto: CreateProductDto): Promise<ProductEntity> {
        return await this.productsService.createProduct(currentUser, createProductDto);
    }

    @Get()
    @Roles(RolesType.EMPLOYEE, RolesType.ADMIN, RolesType.SUPER_ADMIN)
    @UseGuards(AuthGuard, RoleGuard)
    async getAll(@UserDecorator() currentUser: User): Promise<ProductEntity[]> { 
        return await this.productsService.getAllProducts(currentUser);
    }
}
