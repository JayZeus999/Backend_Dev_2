const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("todo");
});

app.post("/todo", (req, res, next) => {
    const id = Math.floor(Math.random() * 10000);
    const title = req.body.title;
    const description = req.body.description;

    todo.push[
        {
            id,
            title,
            description,
            isDone: false
        }
    ]

    res.status(201).send({
        message: "Todo added successfully.",
        todo
    });
});

app.patch("/:id", (req, res) => {
    const id = req.params.id;

    const updatedTodo = [];
    
    for(let i = 0; i < todo.length; i++) {
        if(todo.id == id) {
            todo[i].isDone = isDone;
        }
        updatedTodo = todo[i];
    }
    todo = updatedTodo;
});


app.listen(3000, () => {
    console.log("Server has started on port 3000");
});