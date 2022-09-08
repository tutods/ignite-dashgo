type User = {
  name: string;
  email: string;
  created_at: Date;
};

type RawResponseUser = {
  id?: string;
  name: string;
  email: string;
  created_at: string;
};

type ResponseUser = {
  id?: string;
  name: string;
  email: string;
  createdAt: string;
};

type RawUsersResponse = {
  users: RawResponseUser[];
};

type UsersResponse = {
  count: number;
  users: ResponseUser[];
};

export { User, ResponseUser, RawResponseUser, RawUsersResponse, UsersResponse };