import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
// import { knex } from 'knex';
import { BoardModule } from './board/board.module';
import { EmailService } from './email/email.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    BoardModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, EmailService],
})
export class AppModule {}
