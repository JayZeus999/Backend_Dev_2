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
    },
    todoStatus: {
        type: String,
        enum: ["pending", "ongoing", "completed"],
        default: "pending"
    }
}, {
    timestamps: true  //For Date purposes.
});

const todoModel = mongoose.model("todos", schema);

module.exports = todoModel;