const db = require("../../services/todos.service");

export class Controller {
  stub(req, res) {
    console.log(`Temporal... ${db}...`);
    return res.json(req.body);
  }
  create(req, res) {
    console.log(`Temporal...${req} ${res}...`);
    return true;
  }
}

export default new Controller();
