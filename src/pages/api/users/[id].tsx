import { NextApiRequest, NextApiResponse } from "next";
import { users } from "shared/data/users";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log("~~ User API Request ~~");

  const { id } = request.query;

  return response.status(200).json({
    ...users.find((user) => user.id === id),
  });
};