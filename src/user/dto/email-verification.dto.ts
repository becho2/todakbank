import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailVerificationDto {
  @IsString()
  @ApiProperty({ description: 'The user id', example: 'johndoe123' })
  id: string;

  @IsString()
  @ApiProperty({ description: 'The user name', example: 'John Doe' })
  name: string;

  @IsPhoneNumber('KR')
  @ApiProperty({ description: 'The user phone number', example: '010-1234-5674' })
  phoneNumber: string;

  @IsEmail()
  @ApiProperty({ description: 'The user email', example: 'john@example.com' })
  email: string;
}
