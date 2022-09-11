type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type ResponseUser = {
  id?: string;
  name: string;
  email: string;
  createdAt: string;
};

type RawUsersResponse = {
  count: number;
  users: User[];
};

type UsersResponse = {
  count: number;
  users: ResponseUser[];
};

type CreateUserResponse = {
  message: string;
  user: User;
};

export {
  User,
  ResponseUser,
  RawUsersResponse,
  UsersResponse,
  CreateUserResponse,
};