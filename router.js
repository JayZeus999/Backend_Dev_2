const express = require("express");

const router = express.Router();

const toDoController = require("./controller/toDoController")

// Todo Router  -->  Route/path, controller
router.get("/", toDoController.getAllTodo);
router.post("/todo", toDoController.addNewTodo);
router.get("/single/:id", toDoController.viewSingleTodo);
router.patch("/:id", toDoController.updateTodoStatus);
router.delete("/:id", toDoController.deleteTodo);
//Try to click another method like PATCH, b4 DELETE might really work.

module.exports = router;  