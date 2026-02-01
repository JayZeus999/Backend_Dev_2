const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    otp: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    purpose: {
        type: String,
        enum: ["verify email", "reset password"]
    }
}, {timestamps: true});

const userModel = mongoose.model("users", schema);

module.exports = userModel;