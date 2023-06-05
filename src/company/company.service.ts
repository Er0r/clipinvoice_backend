import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from './company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './DTO/create-company.dto';
import { UpdateCompanyDto } from './DTO/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}
  async createCompany(createCompanyDto: CreateCompanyDto) {
    const company = new CompanyEntity();
    Object.assign(company, createCompanyDto);
    return await this.companyRepository.save(company);
  }

  async updateCompany(
    id: number,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<CompanyEntity> {
    const company = await this.findById(id);
    if (!company) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    Object.assign(company, updateCompanyDto);
    return await this.companyRepository.save(company);
  }

  async getAll(): Promise<CompanyEntity[]> { 
    return await this.companyRepository.find();
  }

  async findById(id: number): Promise<CompanyEntity> {
    return await this.companyRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
