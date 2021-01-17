import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .post("/", controller.create)
  .post("/stub", controller.stub)
  .delete("/delete/:id", controller.deleteByID);
