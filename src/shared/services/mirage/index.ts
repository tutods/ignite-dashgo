import { createServer, Factory, Model, Response } from "miragejs";
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
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api"; // /api/<route>
      this.timing = 750; // ms

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const pageAsNumber = Number(page);
        const perPageAsNumber = Number(per_page);

        const total = schema.all("user").length;

        const pageStart = (pageAsNumber - 1) * perPageAsNumber;
        const pageEnd = pageStart + perPageAsNumber;

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(
          200,
          {
            "Content-Type": "application/json",
            "x-total-count": String(total),
          },
          { users }
        );
      });

      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
};

export { makeServer };