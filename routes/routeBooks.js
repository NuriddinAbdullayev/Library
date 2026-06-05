const express = require("express");
const router = express.Router();
const controllerBooks = require("../controllers/controllerBooks");

router.get("/getbooks", controllerBooks.getBooks);

router.post("/postbook", controllerBooks.createBook);

router.delete("/deletebook", controllerBooks.deleteAll);

module.exports = router;