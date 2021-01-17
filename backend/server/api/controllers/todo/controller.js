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
        res.status(500).send(error);
        console.log(error);
      }
    }
  }

  async update(req, res) {
    const userId = req.params.id;
    const userName = req.params.name;

    const todo = {};
    const allTodos = [
      { id: 1, name: "alberto", isDone: false, dueDate: "20/1/2022" },
      { id: 2, name: "kevin", isDone: false, dueDate: "20/1/2022" },
      { id: 3, name: "diego", isDone: false, dueDate: "20/1/2022" },
    ];

    //POST and PUT method doesnt work, need to configure api.yml
    allTodos.forEach(function (value) {
      //allTodos.update({"id" : });
      if (userId == value.id) {
        console.log(value);
        res.status(201).send();
      }
      //value.name = req.body.name;
    });

    return res.send("User not found.");
  }

  async deleteByID(req, res) {
    try {
      const wasDeleted = await ToDoService.deleteByID(req.params.id);
      if (wasDeleted == true) {
        res.status(200).json({ message: "To Do successfully removed" });
      } else {
        res.status(404).json({ message: "To Do Not found" });
      }
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }
}

export default new Controller();
