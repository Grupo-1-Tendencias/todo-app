import ToDoService from "../../services/todos.service";

export class Controller {
  stub(req, res) {
    //	console.log(`Temporal... ${db}...`);
    return res.json(req.body);
  }
  create(req, res) {
    const todo = {
      name: req.body.name,
      description: req.body.description,
      isDone: false,
      dueDate: req.body.dueDate,
    };
    if (todo.description == undefined) {
      //If no description was provided, then set it equal to an empty string
      //so the data base accepts an empty description
      todo.description = "";
    }
    if (todo.name == undefined) {
      res.status(400).send();
    } else {
      try {
        ToDoService.db.ref("todo").push(todo);
        res.status(201).send();
      } catch (error) {
        res.status(500).send();
      }
    }
  }
}

export default new Controller();
