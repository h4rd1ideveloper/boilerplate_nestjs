import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly service: CompaniesService) {}

  @Get() findAll() {
    return this.service.findAll();
  }

  @Get(':id') findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post() create(@Body() dto: CreateCompanyDto) {
    return this.service.create(dto);
  }

  @Patch(':id') update(@Param('id') id: string, @Body() dto: UpdateCompanyDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
