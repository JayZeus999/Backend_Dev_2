const express = require("express");
const todoRouter = require("./router");
require("dotenv").config();

const app = express();

app.use(express.json()); //Middleware used to accept & pass requests

app.use("/todo", todoRouter);

// Encapsulation, polymorphism, abstraction, inheritance.

app.listen(3000, () => {
    console.log("Server has started on port 3000");
});