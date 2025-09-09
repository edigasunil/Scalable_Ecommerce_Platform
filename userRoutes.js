const express = require("express");
const router = express.Router();
const { signup, login, getProfile } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// Test route
router.get("/", (req, res) => {
  res.send("User route works 🚀");
});

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Protected Profile Route
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
