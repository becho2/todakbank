import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, Query, ParseIntPipe, DefaultValuePipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailVerificationDto } from './dto/email-verification.dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':idx')
  @ApiOperation({ summary: 'Get a user' })
  @ApiResponse({ status: 200, description: 'Get a user successfully', type: User, isArray: false })
  findOne(@Param('idx', ParseIntPipe) idx: number) {
    return this.userService.findOne(idx);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Get all users successfully', type: User, isArray: true })
  async findAll(
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ): Promise<User[]> {
    console.log(offset, limit);
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
