import { createServer, Factory, Model } from "miragejs";
import { User } from "shared/@types/User";
import { faker } from "@faker-js/faker";

const getName = (): { firstName: string; lastName: string } => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
});

const makeServer = () => {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet
            .email(getName().firstName, getName().lastName)
            .toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api"; // /api/<route>
      this.timing = 750; // ms

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
};

export { makeServer };