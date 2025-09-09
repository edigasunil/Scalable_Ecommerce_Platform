const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/userController");

router.get("/", (req, res) => res.send("User route works"));
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
