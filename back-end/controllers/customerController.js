const express = require("express");
const { one } = require("../db/dbConfig");
const db = require("../db/dbConfig");
const customer = express.Router();

const {
  getAllCustomers,
  getOneCustomer,
  getOneCustomerByFirebase,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../queries/customer");

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
    res.status(400).json({ success: false, error: "Could not find this user" });
  }
});

customer.get("/firebase/:id", async (req, res) => {
  try {
    const oneCustomerByFirebaseId = await getOneCustomerByFirebase(
      req.params.id
    );
    res.status(200).json({ success: true, payload: oneCustomerByFirebaseId });
  } catch (error) {
    res.status(400).json({ success: false, error: "Could not find this user" });
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

customer.put("/:id", async (req, res) => {
  try {
    const updatedCustomer = await updateCustomer(req.params.id, req.body);
    res.status(200).json({ success: true, payload: updatedCustomer });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

customer.delete("/:id", async (req, res) => {
  const deletedCustomer = await deleteCustomer(req.params.id);
  if (deletedCustomer) {
    res.status(200).json({ success: true, payload: deletedCustomer });
  } else {
    res.status(404).json({ success: false, payload: "User not found" });
  }
});

module.exports = customer;
