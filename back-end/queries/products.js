const db = require("../db/dbConfig.js");

const getAllProducts = async () => {
  try {
    return await db.any("SELECT * FROM products");
  } catch {}
};

module.exports = { getAllProducts };
