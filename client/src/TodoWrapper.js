import React, { Component } from "react";
import "./App.css";
import TodoItems from "./TodoItems";

class TodoWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
  }

  async addItem(e) {
    e.preventDefault();

    if (this.nameInput.value !== "") {
      var newItem = {
        key: Math.random(),
        name: this.nameInput.value,
        description: this.descriptionInput.value || "",
        dueDate: this.dueDateInput.value || "",
      };

      this.setState((prevState) => {
        //
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this.nameInput.value = "";
      this.descriptionInput.value = "";
      this.dueDateInput.value = "";

      const response = await fetch("http://localhost:5000/api/todo", {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(response.ok);
      console.log(data);
    }
  }
  render() {
    return (
      <div className="App">
        <main role="main">
          <header className="App-header">To Do</header>
          <div data-testid="body">
            <form onSubmit={this.addItem}>
              <input
                ref={(a) => (this.nameInput = a)}
                placeholder="Enter title"
              ></input>
              <input
                ref={(a) => (this.descriptionInput = a)}
                placeholder="Enter description"
              ></input>
              <input
                ref={(a) => (this.dueDateInput = a)}
                placeholder="Enter due date"
              ></input>
              <button type="submit">Add</button>
            </form>
          </div>
          <TodoItems entries={this.state.items} />
        </main>
      </div>
    );
  }
}

export default TodoWrapper;
