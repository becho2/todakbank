import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailVerificationDto } from './dto/email-verification.dto';
import * as uuid from 'uuid';
import { EmailService } from '../email/email.service';

@Injectable()
export class UserService {
  constructor(private emailService: EmailService) {}

  findOne(idx: number): User {
    const UserOne = new User(idx, 'hello', 'hello', 'hello@gmail.com');
    return UserOne;
  }

  findAll(): User[] | PromiseLike<User[]> {
    // throw new Error('Method not implemented.');
    const UserOne = new User(1, 'hello', 'hello', 'hello@gmail.com');
    const UserTwo = new User(2, 'bye', 'bye', 'bye@gmail.com');
    const users = [UserOne, UserTwo];
    return users;
  }

  async createUser(createUserDto: CreateUserDto) {
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
