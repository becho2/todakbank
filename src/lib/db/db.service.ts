import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
// import { ConfigService } from '@nestjs/config';
import dbConfig from 'src/config/dbConfig';
import knex, { Knex } from 'knex';

@Injectable()
export class DBService {
  read: Knex;
  write: Knex;
  constructor(
    @Inject(dbConfig.KEY) private config: ConfigType<typeof dbConfig>,
  ) {
    this.read = knex(this.config.mysql.readPoolOptions);
    this.write = knex({
      client: 'mysql2',
      connection: this.config.mysql.writePoolOptions,
      pool: {
        min: 0,
        max: process.env.NODE_ENV !== 'production' ? 1 : 10,
      },
      debug: process.env.NODE_ENV == 'development',
    });
  }
}
