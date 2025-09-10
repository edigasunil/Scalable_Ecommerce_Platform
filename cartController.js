// controllers/cartController.js
const db = require("../db");

// Get user's cart
const getCart = (req, res) => {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ error: "User ID is required" });

  db.query(
    "SELECT c.id, p.name, p.price, c.quantity FROM cart c JOIN products p ON c.productId = p.id WHERE c.userId = ?",
    [userId],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.json(results);
    }
  );
};

// Add item to cart
const addToCart = (req, res) => {
  const { userId, productId, quantity } = req.body;
  if (!userId || !productId || !quantity) {
    return res.status(400).json({ error: "All fields are required" });
  }

  db.query(
    "INSERT INTO cart (userId, productId, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)",
    [userId, productId, quantity],
    (err) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.status(201).json({ message: "Added to cart" });
    }
  );
};

module.exports = { getCart, addToCart };
