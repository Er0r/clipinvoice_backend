import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from './company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './DTO/create-company.dto';

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(CompanyEntity) private readonly companyRepository: Repository<CompanyEntity>) {  }
    async createCompany(createCompanyDto: CreateCompanyDto) { 
        const company = new CompanyEntity();
        Object.assign(company, createCompanyDto);
        return await this.companyRepository.save(company);
    }
}
