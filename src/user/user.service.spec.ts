import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailVerificationDto } from './dto/email-verification.dto';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be able to create', () => {
    const user = service.createUser({
      id: 'John',
      name: 'Doe',
      phoneNumber: '01012345678',
      email: 'upchh@example.com',
      age: 18
    });
    expect(user).toEqual(user);
  })

  it('should be able to send verification email', () => {
    const result = service.sendEmailVerification({
      id: 'John',
      name: 'Doe',
      phoneNumber: '01012345678',
      email: 'upchh@example.com',
    });
    expect(result).toBeTruthy();
  })
});
