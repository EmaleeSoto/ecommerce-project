const db = require("../db/dbConfig.js");

const getAllCustomers = async () => {
  try {
    return await db.any("SELECT * FROM customer");
  } catch (error) {
    return error;
  }
};

const getOneCustomer = async (id) => {
  try {
    return await db.one("SELECT * FROM customer WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

const getOneCustomerByFirebase = async (firebase_id) => {
  try {
    return await db.one(
      "SELECT * FROM customer WHERE firebase_id=$1",
      firebase_id
    );
  } catch (error) {
    return error;
  }
};

const createCustomer = async ({
  name,
  phone_number,
  email,
  street_address,
  postal_code,
  city,
  state,
  email_list,
  firebase_id,
}) => {
  try {
    return await db.one(
      "INSERT INTO customer (name, phone_number, email, street_address, postal_code, city, state, email_list, firebase_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        name,
        phone_number,
        email,
        street_address,
        postal_code,
        city,
        state,
        email_list,
        firebase_id,
      ]
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCustomers,
  getOneCustomer,
  getOneCustomerByFirebase,
  createCustomer,
};
