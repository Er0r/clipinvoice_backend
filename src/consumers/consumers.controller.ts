import { Controller, Post, UsePipes, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { CreateConsumerDto } from './DTO/create-consumer.dto';
import { ConsumerEntity } from './consumers.entity';
import { Roles } from 'src/users/roles/roles.decorator';
import { RolesType } from 'src/users/role/role.enum';
import { AuthGuard } from 'src/users/guards/auth.guard';
import { RoleGuard } from 'src/users/role/role.guard';
import { User } from 'src/users/user.entity';
import { UserDecorator } from 'src/users/decorators/user.decorator';


@Controller('consumers')
export class ConsumersController {
  constructor(private readonly consumersService: ConsumersService) {}

  @Post('register')
  @Roles(RolesType.SUPER_ADMIN, RolesType.USER)
  @UseGuards(AuthGuard, RoleGuard)
  @UsePipes(new ValidationPipe())
  async register( @UserDecorator() user: User, @Body() createConsumerDto:CreateConsumerDto): Promise<ConsumerEntity> {
    return await this.consumersService.register(user, createConsumerDto);
  }
}