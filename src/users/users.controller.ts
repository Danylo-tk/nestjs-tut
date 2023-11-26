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

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get(':id')
  getSingleUser(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createUser(@Body() user: unknown) {
    return user;
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() userUpdate: { unknown }) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
