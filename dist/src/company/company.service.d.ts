import { CompanyEntity } from './company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './DTO/create-company.dto';
import { UpdateCompanyDto } from './DTO/update-company.dto';
export declare class CompanyService {
    private readonly companyRepository;
    constructor(companyRepository: Repository<CompanyEntity>);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity>;
    updateCompany(id: number, updateCompanyDto: UpdateCompanyDto): Promise<CompanyEntity>;
    getAll(): Promise<CompanyEntity[]>;
    findById(id: number): Promise<CompanyEntity>;
}
