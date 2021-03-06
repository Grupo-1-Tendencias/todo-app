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

  async search(todoName) {
    let matchTodos = [];
    await this.db
      .ref("todo")
      .orderByChild("name")
      .equalTo(todoName)
      .once(
        "value",
        function (snapshot) {
          matchTodos = Object.values(snapshot.val());
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

  async all() {
    const allTodos = await this.db.ref("todo").once("value");
    var arr = [];
    allTodos.forEach((snapshot) => {
      arr.push({ ...snapshot.val(), key: snapshot.key });
    });
    return arr;
  }

  async byId(key) {
    const todo = await this.db.ref("todo/" + key).once("value");
    return { ...todo.val(), key: todo.key };
  }

  async deleteByID(key) {
    const ref = await this.db.ref("todo/" + key);
    const todo = await ref.once("value");
    if (todo.val() != null) {
      ref.remove();
      return true;
    }
  }
  async updateById(key, upd) {
    const updated = await this.db.ref("todo").child(key).update(upd);
    return updated;
  }
}

export default new ToDoService();
