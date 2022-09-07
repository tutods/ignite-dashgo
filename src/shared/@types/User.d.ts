type User = {
  name: string;
  email: string;
  created_at: Date;
};

type ResponseUser = {
  id?: string;
  name: string;
  email: string;
  createdAt: string;
};

type RawUsersResponse = {
  users: ResponseUser[];
};

type UsersResponse = {
  count: number;
  users: ResponseUser[];
};

export { User, ResponseUser, RawUsersResponse, UsersResponse };