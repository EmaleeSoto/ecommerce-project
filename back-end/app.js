const express = require("express");
const cors = require("cors");
const productsController = require("./controllers/productsController.js");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/products", productsController);

//ROUTES
app.get("/", (req, res) => {
  res.send(
    "<div><h1>Welcome to my ecommerce api server! This api server is being used as a practice tool.</h1> <br /> <h3>Try this endpoint: /products</h3></div>"
  );
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

//EXPORT
module.exports = app;
