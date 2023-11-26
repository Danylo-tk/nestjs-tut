import { Injectable } from '@nestjs/common';
import { users } from 'src/data/users.data';
import { UserType } from 'src/types/user';

@Injectable()
export class UsersService {
  private users = users;

  getAllUsers(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  getSingleUser(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  createUser(user: UserType) {
    const usersById = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersById[0].id + 1,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }

  updateUser(id: number, updatedUser: Partial<UserType>) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.getSingleUser(id);
  }

  deleteUser(id: number) {
    const removedUser = this.getSingleUser(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
