"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'postgres',
    host: '51.222.142.100',
    port: 5432,
    database: 'clipinvoice',
    username: 'postgres',
    password: 'clip#2023gh_hourse',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    }
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map