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
    if (todo.name == undefined) {
      //If name of todo is undefined
      res.status(400).send();
    } else {
      try {
        ToDoService.db.ref("todo").push(todo);
        //db.db.ref("todo").push(todo);
        res.status(201).send();
      } catch (error) {
        console.log(error.name + error.message);
        res.status(400).send();
      }
    }
  }
}

export default new Controller();
