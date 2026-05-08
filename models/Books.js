const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  name: String,
  author: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  librarian: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Librarians"
  }
});

module.exports = mongoose.model("Books", BookSchema);