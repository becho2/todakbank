import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { EmailService } from '../email/email.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, EmailService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be able to create', () => {
    const user = service.createUser({
      id: 'John',
      password: 'v@ryd1ff1cu1t',
      name: 'Doe',
      phoneNumber: '01012345678',
      email: 'upchh@example.com',
      age: 18
    });
    expect(user).toEqual(user);
  })

  it('should be able to send verification email', () => {
    const result = service.sendVerificationEmail({
      id: 'John',
      name: 'Doe',
      phoneNumber: '01012345678',
      email: 'upchh@example.com',
    });
    expect(result).toBeTruthy();
  })
});
