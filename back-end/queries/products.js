const db = require("../db/dbConfig.js");

const getAllAssorted = async () => {
  try {
    return await db.any("SELECT * FROM products WHERE type LIKE 'assorted'");
  } catch (error) {
    return error;
  }
};

const getAllSingle = async () => {
  try {
    return await db.any("SELECT * FROM products WHERE type LIKE 'single'");
  } catch (error) {
    return error;
  }
};

const getProduct = async (id) => {
  try {
    return await db.one("SELECT * FROM products WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

module.exports = { getAllAssorted, getAllSingle, getProduct };
