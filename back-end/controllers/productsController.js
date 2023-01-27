const express = require("express");
const db = require("../db/dbConfig");
const products = express.Router();

const { getAllProducts } = require("../queries/products");

products.get("/", async (req, res) => {
  try {
    const allProducts = await getAllProducts();
    res.status(200).json({ success: true, payload: allProducts });
  } catch {
    res
      .status(400)
      .json({ success: false, payload: "Could not find products" });
  }
});

module.exports = products;
