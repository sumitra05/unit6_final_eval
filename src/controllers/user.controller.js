const express = require("express");
const router = express.Router();
const User =  require("../models/user.model")
const Comment = require("../models/comment.model");


router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.send(users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get('/:id/post', async(req, res)=>{
  try {
      const { page = 1, pageSize = 10 } = req.query;
      let offset = (page - 1) * pageSize;
      const post = await Comment.find().skip(offset).limit(pageSize);
      res.status(200).json(post);
  } catch (err) {
      res.status(400).send(err.message)
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;

// const {
//   body,
//   validationResult,
// } = require("express-validator");


// router.post(
//   "/",
//   body("firstName")
//     .not()
//     .isEmpty()
//     .withMessage("First Name cannot be empty")
//     .isLength({ min: 3 , max:30 })
//     .withMessage("First Name must be at least 3 characters"),

//     body("lastName")
//     .isEmpty()
//     .withMessage("Last Name cannot be empty")
//     .isLength({ min: 3 , max:30})
//     .withMessage("Last Name must be at least 3 characters"),

//   body("email")
//     .isEmail()
//     .custom(async (value) => {
//       const user = await User.findOne({ email: value });

//       if (user) {
//         throw new Error("Email is already in use");
//       }
//       return true;
//     }),

//     body("age")
//     .not()
//     .isEmpty()
//     .withMessage("Age cannot be empty")
//     .isNumeric()
//     .withMessage("Age must be a number")
//     .custom((value) => {
//             if(value < 1  || value > 150){
//                 throw new Error("Incorrect age provided")
//             }
//             return true;
//     }),
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const user = await User.create(req.body);

//       return res.status(201).send(user);
//     } catch (err) {
//       return res.status(500).send({ err: err.message });
//     }
//   }
// );

