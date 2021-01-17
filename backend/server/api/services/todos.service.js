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
  async deleteByID(key) {
    var ref = this.db.ref("todo/" + key);
    var success = await ref.once("value").then(function (snapshot) {
      var data = snapshot.val();

      if (data != null) {
        ref.remove();
        return true;
      } else {
        return false;
      }
    });
    return success;
  }
}
export default new ToDoService();
