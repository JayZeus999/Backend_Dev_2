const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("todo");
});

app.post()

app.listen(3000, () => {
    console.log("Server has started on port 3000");
})