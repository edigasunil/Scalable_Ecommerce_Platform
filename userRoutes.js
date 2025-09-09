const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/userController");

// Test route
router.get("/", (req, res) => {
  res.send("User route works 🚀");
});

// Signup & Login
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
