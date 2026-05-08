const Book = require("../models/Books");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("user");
    res.status(200).json(books);
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
}

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.deleteAll = async(req, res) => {
  await Book.deleteMany({});

  res.send("deleted")
}