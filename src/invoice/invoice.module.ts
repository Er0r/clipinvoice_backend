import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceController } from './invoice.controller';
import { InvoiceEntity } from './invoice.entity';
import { InvoiceService } from './invoice.service';
import { CustomersModule } from '../customers/customers.module';


@Module({
  imports: [CustomersModule, TypeOrmModule.forFeature([InvoiceEntity])],
  controllers: [InvoiceController],
  providers: [InvoiceService]
})
export class InvoiceModule {}
