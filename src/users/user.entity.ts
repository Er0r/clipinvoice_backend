import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { hash } from 'bcrypt';
import { BeforeInsert } from 'typeorm';
import { ProductEntity } from 'src/products/products.entity';
import { InvoiceEntity } from 'src/invoice/invoice.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  role: string;

  @Column()
  status: string;

  @Column()
  company: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToMany(() => ProductEntity, (product) => product.user)
  products: ProductEntity[];

  @OneToMany(() => InvoiceEntity, (invoice) => invoice.user)
  invoices: InvoiceEntity[];
}
