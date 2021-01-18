import React from "react";
import "./styles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../../pages/Home";
import CreateTodo from "../../pages/CreateTodo";
import TodoDetail from "../../pages/TodoDetail";
import UpdateTodo from "../../pages/UpdateTodo";

function App() {
  return (
    <Router data-testid="router">
      <Switch>
        <Route path="/" exact data-testid="route">
          <Home />
        </Route>
        <Route path="/create" data-testid="route">
          <CreateTodo />
        </Route>
        <Route path="/update" data-testid="route">
          <Switch>
            <Route exact path="/update">
              <Redirect to="/" />
            </Route>
            <Route path={`/update/:id`}>
              <UpdateTodo />
            </Route>
          </Switch>
        </Route>
        <Route path="/detail" data-testid="route">
          <Switch>
            <Route exact path="/detail">
              <Redirect to="/" />
            </Route>
            <Route path={`/detail/:id`}>
              <TodoDetail />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
