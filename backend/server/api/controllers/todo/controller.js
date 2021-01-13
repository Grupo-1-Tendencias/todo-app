const db = require("../../services/todos.service");

export class Controller {
	create(req, res) {
		return `Temporal ${req} ${res} ${db}`; //This is only a placeholder for passing es lint tests
	}
}

export default new Controller();
