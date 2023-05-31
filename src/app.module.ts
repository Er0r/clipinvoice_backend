import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthMiddleware } from './users/middlewares/auth.middleware';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductsModule } from './products/products.module';
import { CompanyModule } from './company/company.module';
import ormConfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), UsersModule, InvoiceModule, ProductsModule, CompanyModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '/products', method: RequestMethod.ALL },{ path: '/invoice', method: RequestMethod.ALL },{ path: '/company', method: RequestMethod.ALL }, { path: '/users/register', method: RequestMethod.ALL });
  }
}
