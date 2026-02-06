const express = require("express");
const authController = require("../controller/authController"); 

const router = express.Router();

router.post("/register", authController.register);

router.patch("/", authController.verifyOTP);

// router.post("/login");

module.exports = router;