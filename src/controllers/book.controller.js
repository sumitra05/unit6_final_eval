const express = require("express");
const router = express.Router();
const Book =  require("../models/book.model");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find().lean().exec();
    return res.send(books);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;