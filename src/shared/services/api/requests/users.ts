import { api } from "shared/services/api/index";
import { ResponseUser, UsersResponse } from "shared/@types/requests/Users";

const getUsers = async (): Promise<ResponseUser[]> => {
  const { data } = await api.get<UsersResponse>("/users");

  return data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
};

export { getUsers };