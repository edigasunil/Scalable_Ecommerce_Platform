const db = require("../db");

const getProducts = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products ORDER BY created_at DESC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, description, category, price, stock, image_url } = req.body;
    if (!name || price == null) return res.status(400).json({ error: "name and price required" });

    const [result] = await db.query(
      "INSERT INTO products (name, description, category, price, stock, image_url) VALUES (?, ?, ?, ?, ?, ?)",
      [name, description || "", category || "", price, stock || 0, image_url || ""]
    );
    res.status(201).json({ message: "Product added", productId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports = { getProducts, addProduct };
