const transporter = require("../config/mail");
const dotenv = require("dotenv");
dotenv.config();

const storeOTP = {};

exports.sendOTP = async (req, res) => {
  try {
    const {email} = req.body;

    // Email checker
    if (!email) {
      return res.status(400).json({
        messade: "Email is required!"
      });
    };

    const otp = Math.floor(100000 + Math.random() * 900000);

    storeOTP[email] = otp;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "OTP xabarnoma",
      text: `Sending OTP: ${otp}`
    });

    res.status(200).json({message: "OTP yuborildi"}); 
  } catch (error) {
    console.log(`Error: ${error}`);
    res.send(error);
  };
}

exports.verifyOTP = async (req, res) => {
  try {
    const {email, otp} = req.body;
    
    if (!email || !otp) {
      return res.status(400).json({message: "Email and OPT required"})
    };

    if (storeOTP[email] === Number(otp)) {
      delete storeOTP[email];
      
      return res.status(200).json({
        message: "OTP verified"
      });
    };

    res.status(400).json({message: "Invalid OTP"});
  } catch (error) {
    console.log(error);
  }
}