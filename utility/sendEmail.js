const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "faladejoseph400@gmail.com",
        pass: "fnuzbajuishstegf"
    },
    secure: true,
    port: 465
});