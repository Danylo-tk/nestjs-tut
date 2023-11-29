import { RoleType } from 'src/types/user';

export class CreateUserDto {
  name: string;
  email: string;
  role: RoleType;
}
