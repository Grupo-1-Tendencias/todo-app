const db = require("../../services/todos.service");

export class Controller {
  placeholder() {
    console.log(`this is temporal ${db.ToDoService.name}`);
  }
}

export default new Controller();
