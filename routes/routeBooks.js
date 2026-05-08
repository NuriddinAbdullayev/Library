const express = require("express");
const router = express.Router();
const controllerBooks = require("../controllers/controllerBooks");

router.get("/books", controllerBooks.getBooks);

router.post("/books", controllerBooks.createBook);

router.delete("/delete", controllerBooks.deleteAll);

module.exports = router;