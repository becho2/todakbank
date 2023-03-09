import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  findAll(): User[] | PromiseLike<User[]> {
    // throw new Error('Method not implemented.');
    const UserOne = new User('hello', 'hello', 'hello@gmail.com');
    const UserTwo = new User('bye', 'bye', 'bye@gmail.com');
    const users = [UserOne, UserTwo];
    return users;
  }

  createUser(createUserDto: CreateUserDto): CreateUserDto{
    return createUserDto;
  }
}
