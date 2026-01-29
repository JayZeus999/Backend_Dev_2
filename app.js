const express = require("express");
const todoRouter = require("./router");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/todo-test-db").then(() => {
    console.log("Connected to the database.");
}).catch((err) => {
    console.log("An error occured while trying to connect::::", err)
})

const app = express();

app.use(express.json()); //Middleware used to accept & pass requests

app.use("/todo", todoRouter);

// Encapsulation, polymorphism, abstraction, inheritance.

app.listen(3000, () => {
    console.log("Server has started on port 3000");
});