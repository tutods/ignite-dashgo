import { api } from "shared/services/api/index";
import {
  RawUsersResponse,
  ResponseUser,
  UsersResponse,
} from "shared/@types/User";
import { CreateUserFormData } from "shared/data/schemas/CreateUser.schema";

const getUsers = async (page: number): Promise<UsersResponse> => {
  try {
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
  } catch (error) {
    throw new Error(error);
  }
};

const getUser = async (userId: string): Promise<{ user: ResponseUser }> => {
  try {
    const { data } = await api.get<{ user: ResponseUser }>(`/users/${userId}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async (user: CreateUserFormData) => {
  try {
    const { data } = await api.post("/users", {
      user: {
        ...user,
        created_at: new Date(),
      },
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { getUsers, getUser, createUser };