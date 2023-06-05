"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    database: process.env.DB_NAME || 'local',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'local',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    }
};
exports.default = config;
//# sourceMappingURL=ormconfig.example.js.map