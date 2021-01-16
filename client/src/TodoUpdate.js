import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class TodoUpdate extends Component{
	
	state = {
		todos: [
			{Id: '1', Title: 'Walk the dog', Status: 'Done'},
			{Id: '2', Title: 'Wash the dishes', Status: 'Pending'}
		]
	};
	editToDo = (x) => {
		this.setState(state => ({
			todos: state.todos.map(todo => {
				if (todo.Id === x.Id)
				{
					return{
						...todo,
						Status: todo.Status === "Done" ? "Pending" : "Done"
					};
				} else {
					return todo;
				}
			})
		}));
	};

	render(){
		return(
			<div>
			<h1>TodoList </h1>
				<table className="table">
					<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
					</thead>
					<tbody>
						{this.state.todos.map(x => {
						return (
							<tr key={x.Id}>
							<td>{x.Id}</td>
							<td>{x.Title}</td>
							<td style={{ color: x.Status === "Done" ? "green" : "red" }}>{x.Status}</td>
							<td>
							<button className="btn btn-primary">
								<span>
									<FontAwesomeIcon icon="trash"></FontAwesomeIcon>
								</span>
							</button>
							<button className="btn btn-primary">
								<span>
									<FontAwesomeIcon icon="edit"></FontAwesomeIcon>
								</span>
							</button>
							</td>
							</tr>
						);
						})}
					</tbody>
				</table>
		</div> 

		);
	}
}
