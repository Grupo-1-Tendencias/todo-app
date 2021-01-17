import React, { Component } from "react";
export default class AddTodo extends Component {
  state = {
    Id: "",
    Title: "",
    Description: "",
    Status: "Pending",
  };
  handleIdChange = (event) => {
    this.setState({
      Id: event.target.value,
    });
  };
  handleTitleChange = (event) => {
    this.setState({
      Title: event.target.value,
    });
  };
  handleDescriptionChange = (event) => {
    this.setState({
      Description: event.target.value,
    });
  };
  handleStatusChange = (event) => {
    this.setState({
      Status: event.target.value,
    });
  };
  handleToDoSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd({
      Id: this.state.Id,
      Title: this.state.Title,
      Description: this.state.Description,
      Status: this.state.Status,
    });
    this.setState({
      Id: "",
      Title: "",
      Description: "",
      Status: "Pending",
    });
  };
  render() {
    return (
      <div>
        <h3>Update ToDo</h3>
        <form onSubmit={this.handleToDoSubmit}>
          <div className="form-group">
            <input
              value={this.state.Id}
              onChange={this.handleIdChange}
              className="form-control"
              placeholder="Enter Id"
            />
          </div>
          <div className="form-group">
            <input
              value={this.state.Title}
              onChange={this.handleTitleChange}
              className="form-control"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <input
              value={this.state.Description}
              onChange={this.handleDescriptionChange}
              className="form-control"
              placeholder="Enter Endter Description"
            />
          </div>
          <div className="form-group">
            <select
              value={this.state.Status}
              onChange={this.handleStatusChange}
              className="form-control"
            >
              <option value="Done">Done</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <button type="submit" className="form-control btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
