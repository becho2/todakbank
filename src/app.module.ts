import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { knex } from 'knex';
import { BoardModule } from './board/board.module';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';
import { EmailModule } from './email/email.module';
import { UserModule } from './user/user.module';
import dbConfig from './config/dbConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig, dbConfig],
      isGlobal: true,
      validationSchema,
    }), 
    BoardModule, EmailModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
