import ToDoService from "../../services/todos.service";

export class Controller {
	stub(req, res) {
		return res.json(req.body);
	}
	create(req, res) {
		const todo = {
			name: req.body.name,
			description: req.body.description || "",
			isDone: req.body.isDone,
			dueDate: req.body.dueDate || "",
		};
		if (todo.name == undefined) {
			res.status(400).send();
		} else {
			try {
				ToDoService.db.ref("todo").push(todo);
				res.status(201).json(todo).send();
			} catch (error) {
				res.status(500).send();
			}
		}
	}
}

export default new Controller();
