import todoRouter from "./api/controllers/todo/router";

export default function routes(app) {
  app.use("/api/todo", todoRouter);
}
