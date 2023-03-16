import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DbModule } from '../lib/db/db.module';

@Module({
    imports: [EmailModule, DbModule],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
