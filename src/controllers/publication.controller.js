const express = require("express");
const router = express.Router();
const Publication =  require("../models/publication.model")

router.get("/", async (req, res) => {
  try {
    const publications = await Publication.find().lean().exec();
    return res.send(publications);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const publication = await Publication.create(req.body);
    res.status(201).json(publication);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;