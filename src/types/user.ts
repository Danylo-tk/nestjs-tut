export type UserType = {
  id: number;
  name: string;
  email: string;
  role: RoleType;
};

export type RoleType = 'INTERN' | 'ENGINEER' | 'ADMIN';
