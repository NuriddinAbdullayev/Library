const mongoose = require("mongoose");

const LibrarianSchema = mongoose.Schema({
  name: String,
  age: Number,
  experiance: Number 
});

module.exports = mongoose.model("Librarians", LibrarianSchema);