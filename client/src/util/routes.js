import urlcat from "urlcat";

const API_SLUG = "/api/todo";

function apiBaseURL() {
  let baseURL = process.env.BACKEND_URL || process.env.REACT_APP_BACKEND_URL;
  if (!baseURL) {
    if (process.env.NODE_ENV !== "development") {
      baseURL = "https://g1-todo-app-server.herokuapp.com/";
    } else {
      baseURL = "http://localhost:5000";
    }
  }

  return baseURL;
}

function route(path) {
  return (params) => urlcat(apiBaseURL(), API_SLUG + path, params || {});
}

export const apiRoutes = {
  getTodos: route("/"),
  getTodo: route("/:id"),
  createTodo: route("/"),
  updateTodo: route("/update/:id"),
  deleteTodo: route("/delete/:id"),
  stub: route("/stub"),
  searchTodos: route("/search"),
};
