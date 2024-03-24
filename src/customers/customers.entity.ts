import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

import { InvoiceEntity } from 'src/invoice/invoice.entity';
import { CompanyEntity } from 'src/company/company.entity';

@Entity('consumer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  lane1: string;

  @Column({ nullable: true })
  lane2: string;

  @Column({ nullable: true })
  upozila: string;
  
  @Column({ nullable: true })
  district: string;
  
  @Column({ nullable: true })
  division: string;

  @Column()
  created_by: number;


  @ManyToOne(() => CompanyEntity, (company) => company.customers)
  company: CompanyEntity;

  @OneToMany(() => InvoiceEntity, (invoice) => invoice.user)
  invoices: InvoiceEntity[];
}
