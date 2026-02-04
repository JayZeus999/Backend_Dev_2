const userModel = require("../schema/user");
const otpModel = require("../schema/otp");
const generateOTP = require("../utility/generateOtp");
const bcrypt = require("bcrypt"); 
const smtp = require("../utility/sendEmail");
const {v4} = require("uuid");  

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

    await otpModel.create({
        otp, otpToken: v4(), userId: newUser._id, purpose: "verify-email"
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

async function verifyOTP(req, res) {
    const {otp, otpToken, purpose} = req.body;  

    const otpDetails = await otpModel.findOne({otpToken, purpose});

    if(!otpDetails) {
        res.status(422).send({
            message: "Invalid otp token"
        });
        return;
    }
}

module.exports = {
    register
}