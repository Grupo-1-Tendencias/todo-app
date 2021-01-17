import { json } from "body-parser";

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

  async all() {
    const allTodos = await this.db.ref("todo").once("value");
    var arr = [];
    allTodos.forEach((snapshot) => {
      arr.push(snapshot.val());
    });
    return arr;
  }

  async byId(id) {
    const todo = await this.db.ref("todo/" + id).once("value");
    return JSON.parse(todo);
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
