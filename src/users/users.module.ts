import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [ TypeOrmModule.forFeature([User])],
  providers: [UsersService, AuthGuard],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
