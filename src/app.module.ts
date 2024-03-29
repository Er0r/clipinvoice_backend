import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthMiddleware } from './users/middlewares/auth.middleware';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductsModule } from './products/products.module';
import { CompanyModule } from './company/company.module';

import { CustomersModule } from './customers/customers.module';
import ormConfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), UsersModule, InvoiceModule, ProductsModule, CompanyModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '/products', method: RequestMethod.ALL },
      { path: '/invoice', method: RequestMethod.ALL },
      { path: '/invoice/:id', method: RequestMethod.ALL },
      { path: '/company', method: RequestMethod.ALL }, 
      { path: '/company/:id', method: RequestMethod.ALL }, 
      { path: '/users/:type', method: RequestMethod.GET }, 
      { path: '/users/:id', method: RequestMethod.PUT }, 
      { path: '/products/:id', method: RequestMethod.ALL },
      { path: '/customers', method: RequestMethod.ALL }
      );
  }
}
