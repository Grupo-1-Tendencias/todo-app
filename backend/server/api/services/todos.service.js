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

    // LOCAL DATA 
    const allTodos = [
      {id: 1, name: "alberto", isDone : false, dueDate : "20/1/2022"},
      {id: 2, name: "kevin", isDone : false, dueDate : "20/1/2022"},
      {id: 3, name: "diego", isDone : false, dueDate : "20/1/2022"}
      ]
      
      allTodos.forEach(function(value){     
        if(key == value.id) { 
           if(req.body.name != null) value.name = req.body.name;
           if(req.body.description != null) value.description = req.body.description;
           if(req.body.isDone != null) value.isDone = req.body.isDone;
           if(req.body.dueDate != null) value.dueDate = req.body.dueDate;
          return res.send(value); 
        }          
      });   
      return res.send(null);
    
  }

}
export default new ToDoService();
