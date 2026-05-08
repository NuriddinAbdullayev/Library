const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Birinchi_offline_databse");

    console.log("Database is connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;