const db = require("../../services/todos.service");

export class Controller {
  stub(req, res) {
    console.log(`Temporal... ${db}...`);
    return res.json(req.body);
  }
  create(req, res) {
    const todo = {
      name: req.body.name,
      description: req.body.description,
      isDone: req.body.isDone,
      dueDate: req.body.dueDate,
    };
    res
      .status(201)
      .send({ message: `Todo: "${todo.name} added to data base succesfully"` });
  }
}

export default new Controller();
