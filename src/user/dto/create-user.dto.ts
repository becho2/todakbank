import { IsString, IsEmail, IsInt, Min, Max, MinLength, MaxLength, IsPhoneNumber, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { BadRequestException } from '@nestjs/common';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(25)
  @ApiProperty({ description: 'The user id', example: 'johndoe123' })
  id: string;

  @Transform(({value, obj}) => {
    if (obj.password.includes(obj.name.trim()) || obj.password.includes(obj.id.trim())) {
      throw new BadRequestException('password는 name 또는 id를 포함할 수 없습니다.');
    }
    return value.trim();
  })
  @IsString()
  @Matches(/^[a-zA-Z\d!@#$%^&*()]{8,30}$/)
  @ApiProperty({ description: 'The password', example: 'v@ryd1ff1cu1t' })
  password: string;

  @Transform(params => params.value.trim())
  @IsString()
  @MinLength(3)
  @MaxLength(25)
  @ApiProperty({ description: 'The user name', example: 'John Doe' })
  name: string;

  @IsPhoneNumber('KR')
  @ApiProperty({ description: 'The user phone number', example: '010-1234-5674' })
  phoneNumber: string;

  @IsEmail()
  @MaxLength(70)
  @ApiProperty({ description: 'The user email', example: 'john@example.com' })
  email: string;

  @IsInt()
  @Min(5)
  @Max(100)
  @ApiProperty({ description: 'The user age', example: 30 })
  age: number;
}
