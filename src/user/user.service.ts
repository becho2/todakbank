import { Injectable, BadRequestException } from '@nestjs/common';
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
    // this.dbService.read.schema.hasTable('user')
    // .then((exists) => {
    //   if (!exists) {
    //     console.log('it does not exist');
    //     this.dbService.write.schema.createTable('user', function(t) {
    //       t.increments('idx').primary();
    //       t.string('id', 100);
    //       t.string('password', 100);
    //       t.string('name', 100);
    //       t.string('phoneNumber', 100);
    //       t.string('email', 100);
    //       t.tinyint('age');
    //     }).then((result) => {
    //       console.log(result);
    //     });
    //   }
    // });
  
    await this.checkUserExists(createUserDto.email);

    // const signupVerifyToken = uuid.v1();

    // await this.saveUser(createUserDto, signupVerifyToken);
    // return await this.sendMemberJoinEmail(createUserDto.email, signupVerifyToken);
    return createUserDto;
  }

  sendVerificationEmail(emailVerificationDto: EmailVerificationDto): boolean {
    return true;
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    return await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
  }
  
  private async checkUserExists(email: string) {
    const sql = this.dbService.read('user')
    .select('idx')
    .where('email', email)
    const [rows] = await sql;

    if (rows.idx > 0) {
      throw new BadRequestException('Email already exists');
    }
  }

  private saveUser(user: CreateUserDto, signupVerifyToken: string): CreateUserDto {
    this.dbService.read('user').insert(user)
    .then((result) => {
        console.log(result);
      });;
    return user; // @TODO: DB연동 후 구현
  }
}
