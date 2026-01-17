const express = require("express");
const todoRouter = require("./router")

const app = express();

app.use(express.json());

let todo = [];

app.use("/todo", todoRouter);

// Encapsulation, polymorphism, abstraction, inheritance.

app.listen(3000, () => {
    console.log("Server has started on port 3000");
});

module.exports = todo;