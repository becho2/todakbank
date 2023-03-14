import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
    // return process.env.NODE_PORT;
    // return process.env.NODE_ENV
    // return `${__dirname}/config/env/.${process.env.NODE_ENV}.env`;
  }

  getEnv(): string {
    return process.env.NODE_ENV;
  }
}
