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
		if (todo.name == false) {
			//If required properties are falsy
			res.status(400).send();
		} else {
			res.status(201).send();
		}
	}
}

export default new Controller();
