import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserType } from 'src/types/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.getAllUsers(role);
  }

  @Get(':id')
  getSingleUser(@Param('id') id: string) {
    return this.usersService.getSingleUser(+id); // '+' (unary plus) operator converts id to a number
  }

  @Post()
  createUser(@Body() user: UserType) {
    return this.usersService.createUser(user);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() userUpdate: Partial<UserType>) {
    return this.usersService.updateUser(+id, userUpdate);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
