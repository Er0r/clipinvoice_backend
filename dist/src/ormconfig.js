"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || '188.166.242.144',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    database: process.env.DB_NAME || 'clipinvoice',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'clip#2023gh_hourse',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map