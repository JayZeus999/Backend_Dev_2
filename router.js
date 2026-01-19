const express = require("express");

const router = express.Router();

// Route/path, controller
router.get("/", );

router.post("/todo", );


router.get("/single/:id", );

router.patch("/:id", );

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