const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isActive: Boolean,

  role: {
    type: String,
    default: "user"
  }
});

module.exports = mongoose.model("Users", UserSchema);