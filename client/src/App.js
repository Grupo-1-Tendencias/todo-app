import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
      <main role="main">
        <header className="App-header">To Do</header>
        <div data-testid="body" className="App-body"></div>
      </main>
    </div>
  );
}

export default App;
