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
            useName: req.body.useName,
            useDescription: req.body.useDescription,
            useIsDone: req.body.useIsDone,
            useDueDate: req.body.useDueDate,
            name: req.body.name,
            description: req.body.description,
            isDone: req.body.isDone,
            dueDate: req.params.dueDate
        };
        if (searchTodo.name == undefined ||
            (!searchTodo.useName &&
                !searchTodo.useDescription &&
                !searchTodo.useIsDone &&
                !searchTodo.useDueDate)) res.status(400).send();
        else {
            res.status(200).send();
        }
    }
}

export default new Controller();