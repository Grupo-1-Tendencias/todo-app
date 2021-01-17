import ToDoService from "../../services/todos.service";

export class Controller {
  stub(req, res) {
    return res.json(req.body);
  }
  async create(req, res) {
    const todo = {
      name: req.body.name,
      description: req.body.description || "",
      isDone: req.body.isDone || false,
      dueDate: req.body.dueDate || "",
    };
    if (todo.name == undefined) {
      res.status(400).send();
    } else {
      try {
        const newTodo = await ToDoService.create(todo);
        res.status(201).json(newTodo);
      } catch (error) {
        res.status(500).send();
      }
    }
  }

  async all(req, res) {
    res
      .status(200)
      .json(await ToDoService.all())
      .send();
  }

  async byId(req, res) {
    if (req.params.id) {
      const result = await ToDoService.byId(req.params.id);
      if (result !== "null") res.status(200).json(result).send();
      else res.status(404).send();
    } else res.status(404).send();
  }
}

export default new Controller();
