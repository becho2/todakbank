import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
// import { knex } from 'knex';
import { BoardModule } from './board/board.module';
import { EmailService } from './email/email.service';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';
import { EmailModule } from './email/email.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['${__dirname}/config/env/.${process.env.NODE_ENV}.env'],
      load: [emailConfig],
      isGlobal: true,
      validationSchema,
    }), 
    BoardModule, EmailModule, UserModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, EmailService],
})
export class AppModule {}
