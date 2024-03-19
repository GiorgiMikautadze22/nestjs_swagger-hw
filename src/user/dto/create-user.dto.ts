import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'genadi@genaduna.com',
    description: 'User email',
    required: true,
    format: 'email',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '123123123',
    description: 'User password',
    required: true,
    format: 'password',
    minLength: 8,
  })
  @IsNotEmpty()
  @Length(8)
  password: string;
}
