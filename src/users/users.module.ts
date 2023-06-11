import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthGuard } from './guards/auth.guard';
import { CompanyEntity } from 'src/company/company.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([User, CompanyEntity])],
  providers: [UsersService, AuthGuard],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
