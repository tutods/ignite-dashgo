import { api } from "shared/services/api/index";
import {
  RawUsersResponse,
  ResponseUser,
  UsersResponse,
} from "shared/@types/User";

const getUsers = async (page: number): Promise<UsersResponse> => {
  const { data, headers } = await api.get<RawUsersResponse>("/users", {
    params: {
      page,
    },
  });

  const count = Number(headers["x-total-count"]);
  const users: ResponseUser[] = data.users.map((user: ResponseUser) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));

  return {
    count,
    users,
  };
};

export { getUsers };