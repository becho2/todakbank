import { IsString, IsEmail, IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: 'The user name', example: 'John Doe' })
  name: string;

  @IsString()
  @ApiProperty({ description: 'The user id', example: 'johndoe123' })
  id: string;

  @IsEmail()
  @ApiProperty({ description: 'The user email', example: 'john@example.com' })
  email: string;

  @IsInt()
  @Min(18)
  @Max(100)
  @ApiProperty({ description: 'The user age', example: 30 })
  age: number;
}
