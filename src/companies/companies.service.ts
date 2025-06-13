import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company) private readonly repo: Repository<Company>,
  ) {}

  findAll(): Promise<Company[]> {
    return this.repo.find({ relations: ['products'] });
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.repo.findOne({
      where: { id },
      relations: ['products'],
    });
    if (!company) throw new NotFoundException('Company not found');
    return company;
  }

  create(dto: CreateCompanyDto): Promise<Company> {
    const company = this.repo.create(dto);
    return this.repo.save(company);
  }

  async update(id: number, dto: UpdateCompanyDto): Promise<Company> {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const company = await this.findOne(id);
    await this.repo.remove(company);
  }
}
