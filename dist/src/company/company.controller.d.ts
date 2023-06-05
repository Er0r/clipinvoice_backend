import { CompanyService } from './company.service';
import { CreateCompanyDto } from './DTO/create-company.dto';
import { CompanyEntity } from './company.entity';
import { UpdateCompanyDto } from './DTO/update-company.dto';
export declare class CompanyController {
    readonly companyService: CompanyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity>;
    getAll(): Promise<CompanyEntity[]>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<CompanyEntity>;
}
