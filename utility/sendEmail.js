const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "",
        pass: ""
    },
    secure: true,
    port: 465
});