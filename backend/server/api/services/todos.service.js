export class ToDoService {
  constructor() {
    var serviceAccount = require("../../.././grupo-1-tendencias-todo-app-firebase-adminsdk-vl65h-7ea3fd91c4.json");
    const admin = require("firebase-admin");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL:
        "https://grupo-1-tendencias-todo-app-default-rtdb.firebaseio.com/",
    });
    this.db = admin.database();
  }
}
export default new ToDoService();
