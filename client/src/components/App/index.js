import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CreateTodo from "../../pages/CreateTodo";

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
        <Route path="/update/:id" data-testid="route">
          <h1>PUT /todo/:id</h1>
        </Route>
        <Route path="/detail/:id" data-testid="route">
          <h1>GET /todo/:id</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
