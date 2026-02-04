const userModel = require("../schema/user");
const otpsModel = require("../schema/otp");
const generateOTP = require("../utility/generateOtp");
const bcrypt = require("bcrypt"); 
const smtp = require("../utility/sendEmail")

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

    const otp = generateOTP();

    await otpsModel.create({
        otp, otpToken, userId: newUser._id, purpose: "verify-email"
    });

    await smtp.sendMail({
        from: process.env.EMAIL_USERNAME, 
        to:email,
        subject: "Company Name - Verify Email",
        html: `
            <h1>Verify email</h1>
            <div>Your otp is: ${otp}</div>
        `
    });

    res.status(201).send({
        message: "User created successfully.",
        otpToken, purpose
    });

}

module.exports = {
    register
}