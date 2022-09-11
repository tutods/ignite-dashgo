import { CreateUserResponse, RawUsersResponse } from "shared/@types/User";
import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";
import { CreateUserFormData } from "shared/data/schemas/CreateUser.schema";
import { users } from "shared/data/users";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log("~~ Users API Request ~~");

  /**
   * Return all users
   */
  if (request.method === "GET") {
    const { page = 1, per_page = 10 } = request.query;

    const pageAsNumber = Number(page);
    const perPageAsNumber = Number(per_page);

    const total = users.length;

    const pageStart = (pageAsNumber - 1) * perPageAsNumber;
    const pageEnd = pageStart + perPageAsNumber;

    return (response as NextApiResponse<RawUsersResponse>)
      .status(200)
      .setHeader("x-total-count", total)
      .json({ count: total, users: users.slice(pageStart, pageEnd) });
  }

  /**
   * Create a new user
   */
  if (request.method === "POST") {
    const {
      user: { name, email },
    } = request.body as { user: CreateUserFormData };

    const user = {
      id: faker.datatype.uuid(),
      name,
      email,
      createdAt: faker.date.recent(1).toString(),
    };

    users.push(user);

    return (response as NextApiResponse<CreateUserResponse>).status(201).json({
      message: "User successfully created!",
      user,
    });
  }

  /**
   * If don't match with any request method
   */
  return response.status(405).json({
    message: "Method not allowed!",
  });
};