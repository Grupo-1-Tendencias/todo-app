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
    const ref = await this.db.ref("todo/" + key);
    const todo = await ref.once("value");
    if (todo.val() != null) {
      ref.remove();
      return true;
    }
    return false;
  }

  async updateByID(key) {
    //const ref = await this.db.ref("todo/update/" + key);
    //const todo = await ref.once("value");

    const allTodos = [
      {id: 1, name: "alberto", isDone : false, dueDate : "20/1/2022"},
      {id: 2, name: "kevin", isDone : false, dueDate : "20/1/2022"},
      {id: 3, name: "diego", isDone : false, dueDate : "20/1/2022"}
      ]
    //POST and PUT method doesnt work, need to configure api.yml
    allTodos.forEach(function(value){     
        //allTodos.update({"id" : });
        if(key == value.id) { 
          return res.send(value); 
          //res.status(201).send();
        }
        //value.name = req.body.name;          
    });   
    return res.send(null);
  }

}
export default new ToDoService();
