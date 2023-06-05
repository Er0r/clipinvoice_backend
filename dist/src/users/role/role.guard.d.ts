import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class RoleGuard implements CanActivate {
    private reflector;
    constructor(reflector: Reflector);
    matchRoles(roles: string[], userRoles: string[]): boolean;
    canActivate(context: ExecutionContext): boolean;
}
