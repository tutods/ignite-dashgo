import { faker } from "@faker-js/faker";
import { User } from "shared/@types/User";

const generateUser = (): User => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    id: faker.datatype.uuid(),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email(firstName, lastName).toLowerCase(), // generate email using the user name
    createdAt: faker.date.recent(10).toString(),
  };
};

// Create an array of 200 users, using generateUser function to fill it
const users: User[] = new Array(200).fill(null).map((_) => generateUser());

export { users };