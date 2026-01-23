const express = require("express");

const router = express.Router();

const toDoController = require("./controller/toDoController")

// Route/path, controller
router.get("/", toDoController.getAllTodo);

router.post("/todo", toDoController.addNewTodo);

router.get("/single/:id", toDoController.viewSingleTodo);

router.patch("/:id", toDoController.updateTodoStatus);

//Try to click another method like PATCH, b4 DELETE might really work.
router.delete("/:id", toDoController.deleteTodo);


module.exports = router;  