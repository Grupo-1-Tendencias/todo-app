import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .get("/", controller.all)
  .get("/:id", controller.byId)
  .post("/", controller.create)
  .post("/stub", controller.stub)
  .delete("/delete/:id", controller.deleteByID)
  .put("/update/:id", controller.updateById)
  .post("/search", controller.search);
