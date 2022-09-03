import { createServer, Factory, Model } from "miragejs";
import { User } from "shared/@types/User";
import { faker } from "@faker-js/faker";

const makeServer = () =>
  createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.fullName();
        },
        email() {
          return faker.internet.email().toLowerCase();
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

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

export { makeServer };