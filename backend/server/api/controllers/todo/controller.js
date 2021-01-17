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

  async deleteByID(req, res) {
    try {
      var a = await ToDoService.deleteByID(req.params.id);
      if (a == true) {
        res.status(200).json({ message: "To Do successfully removed" });
      } else {
        res.status(404).json({ message: "To Do Not found" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new Controller();
