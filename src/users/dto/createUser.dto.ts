import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { RoleType } from 'src/types/user';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'Valid role required' })
  role: RoleType;
}
