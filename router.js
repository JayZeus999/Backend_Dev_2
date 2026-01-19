const express = require("express");

const router = express.Router();

// Route/path, controller
router.get("/", );

router.post("/todo", );


router.get("/single/:id", (req, res) => {
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
});

router.patch("/:id", (req, res) => {
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
});

//Try to click another method like PATCH, b4 DELETE might really work.
router.delete("/:id", (req, res) => {
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
});


module.exports = router;