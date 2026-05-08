const User = require("../models/Users");
const {registerSchema, loginSchema} = require("../validators/userValidator");
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/generateToken.js");
const mongoose = require("mongoose");

exports.registerUser = async (req, res) => {
  try {
    const validation = registerSchema.safeParse(req.body);

    // Check the input 
    if (!validation.success) {
      return res.status(400).json({ message: validation.error });
    }

    const { name, surname, age, email, password } = req.body;

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({ message: "User is already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      surname,
      age,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered",
      user: newUser,
    });

  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const validation = loginSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({ message: validation.error.errors });
    }

    const { email, password } = validation.data; 

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.password) {
      return res.status(500).json({ message: "User password missing in DB" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = generateToken(user)

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
}

exports.profile = async (req, res) => {
  res.status(200).json({
    message: "Protected profile",
    user: req.user
  })
}

exports.deleteAll = async(req, res) => {
  await User.deleteMany({});

  res.send("deleted")
}