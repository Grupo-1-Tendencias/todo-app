const admin = require("firebase-admin");
const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

export class ToDoService {
  constructor() {
    var app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL:
        "https://grupo-1-tendencias-todo-app-default-rtdb.firebaseio.com/",
    });
    this.db = app.database();
  }

  async create(todo) {
    const newTodoRef = await this.db.ref("todo").push();
    await newTodoRef.set(todo);
    const allTodos = await this.db.ref("todo").once("value");
    const newTodo = allTodos.child(newTodoRef.key).toJSON();
    return { ...newTodo, key: newTodoRef.key };
  }

  async search(searchTodo) {
    let matchTodos = [];
    await this.db.ref("todo").once(
      "value",
      function (snapshot) {
        const todos = snapshot.val();
        for (const property in todos) {
          let todo = todos[property];
          //If the respective filter is used and the fields match, then add that todo to the match array
          if (searchTodo.useName && searchTodo.name === todo.name)
            matchTodos.push(todo);
          else if (
            searchTodo.useDescription &&
            searchTodo.description === todo.description
          )
            matchTodos.push(todo);
          else if (searchTodo.useIsDone && searchTodo.isDone === todo.isDone)
            matchTodos.push(todo);
          else if (searchTodo.useDueDate && searchTodo.dueDate === todo.dueDate)
            matchTodos.push(todo);
        }
        return matchTodos;
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        return -1;
      }
    );
    // Just in case
    return matchTodos;
  }

  async deleteByID(key) {
    const ref = await this.db.ref("todo/" + key);
    const todo = await ref.once("value");
    if (todo.val() != null) {
      ref.remove();
      return true;
    }
    return false;
  }
}
export default new ToDoService();
