import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { ExpressRequest } from '../../types/expressRequest.interface';
import { UsersService } from '../users.service';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly usersService;
    constructor(usersService: UsersService);
    use(req: ExpressRequest, _: Response, next: NextFunction): Promise<void>;
}
