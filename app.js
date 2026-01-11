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
});



app.listen(3000, () => {
    console.log("Server has started on port 3000");
})