import { Controller, Body, Post, UseGuards, Get, Param, Delete } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { AuthGuard } from '../users/guards/auth.guard';
import { CreateInvoiceDto } from './DTO/create-invoice.dto';
import { UserDecorator } from '../users/decorators/user.decorator';
import { User } from 'src/users/user.entity';
import { InvoiceEntity } from './invoice.entity';
import { Roles } from 'src/users/roles/roles.decorator';
import { RolesType } from 'src/users/role/role.enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('invoice')
@Controller('invoice')
export class InvoiceController {
    constructor (readonly invoiceService: InvoiceService) {}

    @Post()
    @UseGuards(AuthGuard)
    @Roles(RolesType.USER, RolesType.SUPER_ADMIN)
    async create(@UserDecorator() currentUser: User,  @Body('invoice') createInvoiceDto: CreateInvoiceDto): Promise<InvoiceEntity> { 
        return await this.invoiceService.createInvoice(currentUser, createInvoiceDto);
    }

    @Get()
    @UseGuards(AuthGuard)
    @Roles(RolesType.USER, RolesType.SUPER_ADMIN)
    async getAllInvoices(@UserDecorator() currentUser: User): Promise<InvoiceEntity[]> {
        return await this.invoiceService.getInvoices(currentUser);
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    @Roles(RolesType.USER, RolesType.SUPER_ADMIN)
    async getInvoiceById(@UserDecorator() currentUser: User, @Param('id') id: number | string): Promise<InvoiceEntity> {
        return await this.invoiceService.getInvoiceById(currentUser, id);
    }

    @Delete()
    @UseGuards(AuthGuard)
    @Roles(RolesType.USER, RolesType.SUPER_ADMIN)
    async deleteInvoice(@UserDecorator() currentUser: User, @Body('id') id: number[]): Promise<{ message: string }> {
        return await this.invoiceService.deleteInvoices(currentUser, id);
    }
}
