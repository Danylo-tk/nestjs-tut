import { UserType } from 'src/types/user';

export const users: UserType[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'ADMIN' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'ENGINEER' },
  {
    id: 3,
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    role: 'ENGINEER',
  },
  {
    id: 4,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'INTERN',
  },
  { id: 5, name: 'Eve Brown', email: 'eve.brown@example.com', role: 'INTERN' },
];
