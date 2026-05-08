const express = require("express");
const router = express.Router();
const controllerOTP = require("../controllers/controllerOTP");

router.post("/send-otp", controllerOTP.sendOTP);

router.post("/verify-otp", controllerOTP.verifyOTP);

module.exports = router;