const express = require("express");
const { one } = require("../db/dbConfig");
const db = require("../db/dbConfig");
const customer = express.Router();

const {
  getAllCustomers,
  getOneCustomer,
  getOneCustomerByFirebase,
  createCustomer,
} = require("../queries/customer");
const { all } = require("./productsController");

customer.get("/", async (req, res) => {
  try {
    const allCustomers = await getAllCustomers();
    return res.status(200).json({ success: true, payload: allCustomers });
  } catch (error) {
    return error;
  }
});

customer.get("/:id", async (req, res) => {
  try {
    const oneCustomer = await getOneCustomer(req.params.id);
    res.status(200).json({ success: true, payload: oneCustomer });
  } catch (error) {
    return error;
  }
});

customer.get("/firebase/:id", async (req, res) => {
  try {
    const oneCustomerByFirebaseId = await getOneCustomerByFirebase(
      req.params.id
    );
    res.status(200).json({ success: true, payload: oneCustomerByFirebaseId });
  } catch (error) {
    return error;
  }
});

customer.post("/", async (req, res) => {
  try {
    const newCustomer = await createCustomer(req.body);
    res.status(200).json({ success: true, payload: newCustomer });
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
});

module.exports = customer;
