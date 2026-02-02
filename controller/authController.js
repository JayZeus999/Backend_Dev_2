const userModel = require("../schema/user");
const otpsModel = require("../schema/otp");
const bcrypt = require("bcrypt");

async function register (req, res) {
    const {
        fullName, email, password
    } = req.body;

    const emailExists = await userModel.findOne({email});

    if(emailExists) {
        res.status(409).send({
            message: "Emails already exists."
        });
        return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await userModel.create({
        fullName, email, password: hashedPassword
    });

    res.status(201).send({
        message: "User created successfully."
    });

}



module.exports = {
    register
}