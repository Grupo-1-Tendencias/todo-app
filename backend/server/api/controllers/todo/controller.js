const service = require("../../services/todos.service");

export class Controller {
	create(req, res) {
		ExamplesService.create(req.body.name).then((r) =>
			res.status(201).location(`/api/examples/${r.id}`).json(r)
		);
	}
} //CRUDS methods will be in this class
export default new Controller();
