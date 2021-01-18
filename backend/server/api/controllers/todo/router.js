import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .get("/", controller.all)
  .get("/:id", controller.byId)
  .post("/", controller.create)
  .post("/stub", controller.stub)
  .post("/search", controller.search)
  .delete("/delete/:id", controller.deleteByID);
