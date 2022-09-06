import { User } from "shared/@types/User";

type ResponseUser = Omit<User, "created_at"> & {
  id?: string;
  createdAt: string;
};

type UsersResponse = {
  users: ResponseUser[];
};

export { ResponseUser, UsersResponse };