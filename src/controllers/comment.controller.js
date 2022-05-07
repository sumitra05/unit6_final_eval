const express = require("express");
const router = express.Router();
const Comment =  require("../models/comment.model");

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().lean().exec();
    return res.send(comments);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;