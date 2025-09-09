// routes/cartRoutes.js
const express = require("express");
const { getCart, addToCart } = require("../controllers/cartController");

const router = express.Router();

router.get("/", getCart);
router.post("/", addToCart);

module.exports = router;
