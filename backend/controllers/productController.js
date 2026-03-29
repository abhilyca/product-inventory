import pool from "../config/db.js";

// ADD
export const addProduct = async (req, res) => {
  try {
    const { name, price, category, quantity } = req.body;

const result = await pool.query(
  "INSERT INTO products (name, price, category, quantity) VALUES ($1,$2,$3,$4) RETURNING *",
  [
    name,
    Number(price),     // ✅ FIX
    category,
    Number(quantity)   // ✅ FIX
  ]
);

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// GET ALL
export const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// UPDATE
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category, quantity } = req.body;

    await pool.query(
      "UPDATE products SET name=$1, price=$2, category=$3, quantity=$4 WHERE id=$5",
      [name, price, category, quantity, id]
    );

    res.send("Updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// DELETE
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM products WHERE id=$1", [id]);

    res.send("Deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// SEARCH
export const searchProducts = async (req, res) => {
  try {
    const { q } = req.query;

    const result = await pool.query(
      "SELECT * FROM products WHERE name ILIKE $1",
      [`%${q}%`]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};