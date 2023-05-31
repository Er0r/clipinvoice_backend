import { Controller } from '@nestjs/common';
import { CompanyService } from './company.service';
import { AuthGuard } from '../users/guards/auth.guard';
import { UserDecorator } from '../users/decorators/user.decorator';
import { User } from 'src/users/user.entity';
import { Roles } from 'src/users/roles/roles.decorator';
import { RolesType } from 'src/users/role/role.enum';
import { Post, UseGuards, Body } from '@nestjs/common';
import { CreateCompanyDto } from './DTO/create-company.dto';
import { CompanyEntity } from './company.entity';
import { RoleGuard } from 'src/users/role/role.guard';

@Controller('company')
export class CompanyController {
  constructor(readonly companyService: CompanyService) {}

  @Post()
  @UseGuards(AuthGuard, RoleGuard)
  @Roles(RolesType.SUPER_ADMIN)
  async create(
    @UserDecorator() currentUser: User,
    @Body('company') createCompanyDto: CreateCompanyDto,
  ): Promise<CompanyEntity> {
    console.log(createCompanyDto);
    return await this.companyService.createCompany(createCompanyDto);
  }
}
