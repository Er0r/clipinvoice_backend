import { Module } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { ConsumersController } from './consumers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumerEntity } from './consumers.entity';
import { AuthGuard } from 'src/users/guards/auth.guard';
import { User } from 'src/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ConsumerEntity])],
  controllers: [ConsumersController],
  providers: [ConsumersService, AuthGuard],
})
export class ConsumersModule {}
