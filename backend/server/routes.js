import todoRouter from "./api/controllers/todo/router";
import examplesRouter from "./api/controllers/examples/router";

export default function routes(app) {
  app.use("/api/todo", todoRouter);
  app.use("/api/examples", examplesRouter);
}
