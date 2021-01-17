import ToDoService from "../../services/todos.service";

export class Controller {
    stub(req, res) {
        return res.json(req.body);
    }
    async create(req, res) {
        const todo = {
            name: req.body.name,
            description: req.body.description || "",
            isDone: req.body.isDone || false,
            dueDate: req.body.dueDate || "",
        };
        if (todo.name == undefined) {
            res.status(400).send();
        } else {
            try {
                const newTodo = await ToDoService.create(todo);
                res.status(201).json(newTodo);
            } catch (error) {
                res.status(500).send();
            }
        }
    }

    async search(req, res) {
        const searchTodo = {
            name: req.body.name,
            description: req.body.description,
            isDone: req.body.isDone,
            dueDate: req.params.dueDate
        };
        // If the request body is empty, the name property will be undefined
        // If all the searching filters are false, there is nothing to find, so return bad request
        if (searchTodo.name == undefined || searchTodo.name === '') res.status(400).send();
        else {
            const result = await ToDoService.search(searchTodo.name);
            // -1 is the returned value when the connection to the db fails
            if (result != -1) res.status(200).json(result).send();
            else res.status(500).send();
        }
    }
}

export default new Controller();