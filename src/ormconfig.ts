import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = { 
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'clipinvoice',
    username: 'root',
    password: '1234',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    }
}

export default config;