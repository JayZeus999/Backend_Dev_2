const transporter = require("../utility/sendEmail");
const todoModel = require("../schema/todo") //Import todoModel

//Wrap controllers in try & catch
const getAllTodo = async (req, res) => {
    try {
        const todo = await todoModel.find();
        res.send(todo);
    } catch (error) {
        res.status(500).send({
            error
        });
    }
}

const addNewTodo = async (req, res) => {

    const title = req.body.title;
    const description = req.body.description;

    const newTodo = await todoModel.create({
        title, description
    });

    transporter.sendMail({
        from: "faladejoseph400@gmail.com",
        to: "faladejoseph700@gmail.com",
        subject: "Todo [[Create todo]]",
        html: `
            <h1>You've added a new todo: ${req.body.title}</h1>
            <div>${req.body.description}</div>
        `
    });

    res.status(201).send({
        message: "Todo added successfully.",
        newTodo
    });
}

const viewSingleTodo = async (req, res) => {
    const id = req.params.id;

    const todo = await todoModel.findById(id);

    if(!todo) {
        res.status(404).send({
            message: "No todo found"
        });
        return;
    }

    res.send({
        message: "Todo found",
        todoFound
    });
}

const updateTodoStatus = async (req, res) => {
    const id = req.params.id;
    const isDone = req.body.isDone;

    const doesTodoExist = await todoModel.findById(id);

    if(!doesTodoExist) {
        res.send("Todo does not exist");
        return;
    }

    const todo = await todoModel.findByIdAndUpdate(id, {
        todoStatus: isDone
    });
    
    res.send({
        message: "Todo added successfully.",
        todo
    });
}

const deleteTodo = (req, res) => {
    const id = req.params.id;

    let updatedTodo = [];
    let deletedTodo;

    for (let i = 0; i < todo.length; i++) {
        if (todo[i].id != id) {
            updatedTodo.push(todo[i]);
        } else {
            deletedTodo = todo[i]
        }
    }
    todo = updatedTodo;

    res.send({
        message: "Todo deleted successfully.",
        deletedTodo
    });
}

module.exports = {
    addNewTodo,
    getAllTodo,
    viewSingleTodo,
    updateTodoStatus,
    deleteTodo,
}