import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../../companies/entities/company.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column('decimal') price: number;

  @ManyToOne(() => Company, (company) => company.products, {
    onDelete: 'CASCADE',
  })
  company: Company;
}
