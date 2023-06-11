import { Get, Post, Controller, Put, Param, UseGuards, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CompanyService } from './company.service';
import { AuthGuard } from '../users/guards/auth.guard';
import { Roles } from 'src/users/roles/roles.decorator';
import { RolesType } from 'src/users/role/role.enum';
import { CreateCompanyDto } from './DTO/create-company.dto';
import { CompanyEntity } from './company.entity';
import { RoleGuard } from 'src/users/role/role.guard';
import { UpdateCompanyDto } from './DTO/update-company.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('company')
@Controller('company')
export class CompanyController {
  constructor(readonly companyService: CompanyService) {}

  @Post()
  @Roles(RolesType.SUPER_ADMIN, RolesType.USER)
  @UseGuards(AuthGuard, RoleGuard)
  async create(
    @Body('company') createCompanyDto: CreateCompanyDto,
  ): Promise<CompanyEntity> {
    console.log(createCompanyDto);
    return await this.companyService.createCompany(createCompanyDto);
  }

  @Get() 
  @Roles(RolesType.SUPER_ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async getAll(): Promise<CompanyEntity[]> { 
    return await this.companyService.getAll();
  }

  @Put(":id")
  @UsePipes(new ValidationPipe())
  @Roles(RolesType.SUPER_ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async update( @Param("id") id: number, updateCompanyDto: UpdateCompanyDto): Promise<CompanyEntity> { 
    const company = await this.companyService.updateCompany(id, updateCompanyDto);
    return company;
  }
}
