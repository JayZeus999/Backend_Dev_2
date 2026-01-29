const mongoose = require("mongoose");

//A Schema is used to impose structure.
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const todoModel = mongoose.model("todos", schema);

module.exports = todoModel;