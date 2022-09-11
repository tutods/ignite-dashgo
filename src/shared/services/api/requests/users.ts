import { api, fetchData } from "shared/services/api/index";
import {
  CreateUserResponse,
  RawUsersResponse,
  User,
  UsersResponse,
} from "shared/@types/User";
import { CreateUserFormData } from "shared/data/schemas/CreateUser.schema";

const getUsers = async (page: number): Promise<UsersResponse> => {
  try {
    const { data } = await fetchData<RawUsersResponse>("/users", {
      params: {
        page: page,
      },
    });

    const users: User[] = data.users.map((user: User) => {
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

    return {
      count: data.count,
      users,
    };
  } catch (error) {
    throw new Error(error);
  }
};

const getUser = async (userId: string): Promise<{ user: User }> => {
  try {
    const { data } = await api.get<{ user: User }>(`/users/${userId}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async (user: CreateUserFormData) => {
  try {
    const { data } = await api.post<CreateUserResponse>("/users", {
      user,
    });

    alert(data.message);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { getUsers, getUser, createUser };