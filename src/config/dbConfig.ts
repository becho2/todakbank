import { registerAs } from "@nestjs/config";

export default registerAs('db', () => ({
    mysql: {
        readPoolOptions: {
            host: process.env.DATABASE_HOST,
            port: 3306,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: 'test',
            waitForConnections: true,
            connectionLimit: 50,
            queueLimit: 0,
            dateStrings: true,
            namedPlaceholders: true,
            synchronize: process.env.DATABASE_SYNCHRONIZE,
        },
        writePoolOptions: {
            host: process.env.DATABASE_HOST,
            port: 3306,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: 'test',
            waitForConnections: true,
            connectionLimit: 50,
            queueLimit: 0,
            dateStrings: true,
            namedPlaceholders: true,
            synchronize: process.env.DATABASE_SYNCHRONIZE,
        },
    },
}));