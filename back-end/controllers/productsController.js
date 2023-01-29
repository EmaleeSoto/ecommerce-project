const express = require("express");
const { one } = require("../db/dbConfig");
const db = require("../db/dbConfig");
const products = express.Router();

const {
  getAllAssorted,
  getAllSingle,
  getProduct,
} = require("../queries/products");

products.get("/assortments", async (req, res) => {
  try {
    const allProducts = await getAllAssorted();
    res.status(200).json({ success: true, payload: allProducts });
  } catch (error) {
    return error;
  }
});

products.get("/singles", async (req, res) => {
  try {
    const allProducts = await getAllSingle();
    res.status(200).json({ success: true, payload: allProducts });
  } catch (error) {
    return error;
  }
});

products.get("/:id", async (req, res) => {
  try {
    const oneProduct = await getProduct(req.params.id);
    res.status(200).json({ success: true, payload: oneProduct });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, payload: "Could not find this product" });
  }
});

module.exports = products;
