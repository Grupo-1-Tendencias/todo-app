import React from "react";

function Delete() {

    var message;
    function deleteTask(id) {
        fetch('https://g1-todo-app-server-staging.herokuapp.com/api/todo/delete/' + id, {
            method: 'DELETE',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    return (
        <div>
            <button onClick={() => deleteTask()}>
                Delete</button>
        </div>
    );
}

export default Delete;