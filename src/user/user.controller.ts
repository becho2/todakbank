import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailVerificationDto } from './dto/email-verification.dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Get all users successfully', type: User, isArray: true })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ status: 200, description: 'Create a user successfully'})
  async createUser(@Body() createUserDto: CreateUserDto) {
    // createUserDto 객체는 유효성 검사를 통과한 객체입니다.
    return this.userService.createUser(createUserDto);
  }

  @Post('/email-verification')
  async sendEmailVerification(@Body() emailVerificationDto: EmailVerificationDto) {
    // emailVerificationDto 객체는 유효성 검사를 통과한 객체입니다
    return this.userService.sendVerificationEmail(emailVerificationDto);
  }
}
