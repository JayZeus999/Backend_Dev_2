const express = require("express");

const app = express();

app.use(express.json());

let todo = [];   


// Encapsulation, polymorphism, abstraction, inheritance.

app.listen(3000, () => {
    console.log("Server has started on port 3000");
});

module.exports = todo;