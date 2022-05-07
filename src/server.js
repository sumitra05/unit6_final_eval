const express = require("express");
const connect = require("./config/db");
const app = express();
const userController = require("./controllers/user.controller");
const bookController = require("./controllers/book.controller");
const publicationController = require("./controllers/publication.controller");
const commentController = require("./controllers/comment.controller");

app.use(express.json());

app.use("/user", userController);
app.use("/book", bookController);
app.use("/publication", publicationController);
app.use("/comment", commentController);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("Listening on port 5000");
  } catch (err) {
    console.log(err.message);
  }
});

