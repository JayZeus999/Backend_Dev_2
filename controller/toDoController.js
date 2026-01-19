const getAllTodo = (req, res) => {
    res.send(todo);
}

const addNewTodo = (req, res) => {
    const id = Math.floor(Math.random() * 10000);
    const title = req.body.title;
    const description = req.body.description;

    todo.push({
        id,
        title,
        description,
        isDone: false
    });

    res.status(201).send({
        message: "Todo added successfully.",
        todo
    });
}

const viewNewTodo = (req, res) => {
    const id = req.params.id;

    let todoFound;
    for (let i = 0; i < todo.length; i++) {
        if (todo[i].id == id) {
            todoFound = todo[i];
        }
    }

    if (!todoFound) {
        res.status(404).send("Todo not found");
        return
    };

    res.send({
        message: "Todo found",
        todoFound
    });
}

const updateTodoStatus = (req, res) => {
    const id = req.params.id;
    const isDone = req.body.isDone;

    let updatedTodo = [];

    for (let i = 0; i < todo.length; i++) {
        if (todo[i].id == id) {
            todo[i].isDone = isDone;
        }
        updatedTodo.push(todo[i]);
    }
    todo = updatedTodo;

    res.send({
        message: "Todo added successfully.",
        todo
    });
}