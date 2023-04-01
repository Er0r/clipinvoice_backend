import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = { 
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port:  parseInt(process.env.POSTGRES_PORT) || 5432,
    database:  process.env.DB_NAME || 'clipinvoice',
    username:  process.env.DB_USERNAME || 'postgres',
    password:  process.env.DB_PASSWORD || 'fahim',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    }
}

export default config;