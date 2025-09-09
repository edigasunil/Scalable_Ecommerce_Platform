// controllers/productController.js
const db = require("../db");

// Get all products
const getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
};

// Add a product
const addProduct = (req, res) => {
  const { name, description, price, stock } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  db.query(
    "INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)",
    [name, description, price, stock || 0],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.status(201).json({ message: "Product added", productId: result.insertId });
    }
  );
};

module.exports = { getProducts, addProduct };
