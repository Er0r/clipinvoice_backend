import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

import { InvoiceEntity } from 'src/invoice/invoice.entity';
import { CompanyEntity } from 'src/company/company.entity';

@Entity('consumer')
export class ConsumerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @Column()
  created_by: number;


  @ManyToOne(() => CompanyEntity, (company) => company.consumers)
  company: CompanyEntity;

  @OneToMany(() => InvoiceEntity, (invoice) => invoice.user)
  invoices: InvoiceEntity[];
}
