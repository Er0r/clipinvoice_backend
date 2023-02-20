import { NestMiddleware, Injectable } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { ExpressRequest } from '../../types/expressRequest.interface';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '../../config';
import { UsersService } from '../users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly usersService: UsersService) { } 
    async use(req: ExpressRequest, _: Response, next: NextFunction) {
        if(!req.headers.authorization) { 
            req.user = null;
            next()
        }
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decode = await verify(token, JWT_SECRET);
            const user = await this.usersService.findById(decode.id);
            req.user = user;
            next();
        } catch (error) {
            req.user = null;
            next();
        }
    }
}