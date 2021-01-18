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
      res.status(400).end();
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

  async all(req, res) {
    res.status(200).json(await ToDoService.all());
  }

  async byId(req, res) {
    if (req.params.id) {
      const result = await ToDoService.byId(req.params.id);
      if (result.name == undefined) res.status(404).end();
      else res.status(200).json(result);
    } else res.status(404).end();
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

  async updateById(req, res) {
    const key = req.params.id;
    if (key === undefined) {
      res.status(400);
    } else {
      try {
        let toBeUpdated = await ToDoService.byId(key);
        if (req.body.name != null) {
          toBeUpdated.name = req.body.name;
        }
        if (req.body.description != null) {
          toBeUpdated.description = req.body.description;
        }
        if (req.body.dueDate != null) {
          toBeUpdated.dueDate = req.body.dueDate;
        }
        if (req.body.isDone != null) {
          toBeUpdated.isDone = req.body.isDone;
        }
        await ToDoService.updateById(key, toBeUpdated);
        res.status(200).json(await ToDoService.byId(key));
      } catch (error) {
        res.status(500).send(error);
        console.log(error);
      }
    }
  }

  async search(req, res) {
    const searchTodo = {
      name: req.body.name,
      description: req.body.description,
      isDone: req.body.isDone,
      dueDate: req.params.dueDate,
    };
    // If the request body is empty, the name property will be undefined
    // If name is empty, there is nothing to find, so return bad request
    if (searchTodo.name == undefined || searchTodo.name === "")
      res.status(400).send();
    else {
      const result = await ToDoService.search(searchTodo.name);
      // -1 is the returned value when the connection to the db fails
      if (result != -1) res.status(200).json(result).send();
      else res.status(500).send();
    }
  }
}

export default new Controller();
