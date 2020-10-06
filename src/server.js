import { Server } from "miragejs";

export const makeServer = ({ environment = "test" } = {}) => {
  let server = new Server({
    environment,
    routes() {
      this.get("/api/randomnumber", () => {
          console.log('working' ,Math.ceil(Math.random() * 10))
        return Math.ceil(Math.random() * 10);
      });
    },
  });

  return server;
};
