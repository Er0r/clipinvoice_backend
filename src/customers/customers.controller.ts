import {
    Controller,
    Post,
    UsePipes,
    Body,
    ValidationPipe,
    UseGuards,
    Get,
  } from '@nestjs/common';
  import { CustomersService } from './customers.service';
  import { CreateCustomerDto } from './DTO/create-customer.dto';
  import { CustomerEntity } from './customers.entity';
  import { Roles } from 'src/users/roles/roles.decorator';
  import { RolesType } from 'src/users/role/role.enum';
  import { AuthGuard } from 'src/users/guards/auth.guard';
  import { RoleGuard } from 'src/users/role/role.guard';
  import { User } from 'src/users/user.entity';
  import { UserDecorator } from 'src/users/decorators/user.decorator';


@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}
  
    @Post()
    @Roles(RolesType.SUPER_ADMIN, RolesType.USER)
    @UseGuards(AuthGuard, RoleGuard)
    @UsePipes(new ValidationPipe())
    async register(
      @UserDecorator() user: User,
      @Body('consumer') createCustomerDto: CreateCustomerDto,
    ): Promise<CustomerEntity> {
      return await this.customersService.register(user, createCustomerDto);
    }
  
    @Get()
    @Roles(RolesType.SUPER_ADMIN, RolesType.USER)
    @UseGuards(AuthGuard, RoleGuard)
    @UsePipes(new ValidationPipe())
    async fetchUser(@UserDecorator() user: User): Promise<CustomerEntity[]> {
      try {
        return await this.customersService.fetch(user);
      } catch (err) {
        throw err;
      }
    }
}
