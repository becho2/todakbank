import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailVerificationDto } from './dto/email-verification.dto';
import * as uuid from 'uuid';
import { EmailService } from '../email/email.service';
import { DBService } from '../lib/db/db.service';

@Injectable()
export class UserService {
  constructor(
    private emailService: EmailService,
    private readonly dbService: DBService
  ) {}

  findOne(idx: number): User {
    throw new Error('Method not implemented.');
    // return false;
  }

  findAll(): User[] | PromiseLike<User[]> {
    throw new Error('Method not implemented.');
    // return [new User()];
  }

  async createUser(createUserDto: CreateUserDto) {
    this.dbService.read.schema.hasTable('user')
    .then((exists) => {
      if (!exists) {
        console.log('it does not exist');
        this.dbService.write.schema.createTable('user', function(t) {
          t.increments('idx').primary();
          t.string('id', 100);
          t.string('password', 100);
          t.string('name', 100);
          t.string('phoneNumber', 100);
          t.string('email', 100);
          t.tinyint('age');
        }).then((result) => {
          console.log(result);
        });
      }
    });
    // console.log(userTableExists);
    // if (!userTableExists) {
    //   this.dbService.write.schema.createTable('user', function(t) {
    //     t.increments('idx').primary();
    //     t.string('id', 100);
    //     t.string('password', 100);
    //     t.string('name', 100);
    //     t.string('email', 100);
    //     t.tinyint('age');
    //   });
    // }
    return createUserDto;
    await this.checkUserExists(createUserDto.email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(createUserDto, signupVerifyToken);
    return await this.sendMemberJoinEmail(createUserDto.email, signupVerifyToken);
    // return createUserDto;
  }

  sendVerificationEmail(emailVerificationDto: EmailVerificationDto): boolean {
    return true;
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    return await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
  }
  
  private checkUserExists(email: string) {
    return false; // @TODO DB연동 후 구현
  }

  private saveUser(user: CreateUserDto, signupVerifyToken: string) {
    return; // @TODO: DB연동 후 구현
  }
}
