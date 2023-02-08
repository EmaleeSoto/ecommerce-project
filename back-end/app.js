const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.stripekey);
const productsController = require("./controllers/productsController.js");
const customersController = require("./controllers/customerController.js");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/products", productsController);
app.use("/customers", customersController);

//ROUTES
app.get("/", (req, res) => {
  res.send(
    "<div><h1>Welcome to my ecommerce api server! This api server is being used as a practice tool.</h1> <br /> <h3>Try this endpoint: /products</h3></div>"
  );
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

app.post("/buyproducts", async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      //Syntax below for products not added to Stripe Project
      // price_data: {
      //   currency: "usd",
      //   product_data: {
      //     name: item.name,
      //   },
      //   unit_amount: 2000,
      // },
      // quantity: item.quantity,
      price: item.stripeId,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancelled",
  });
  res.send({ url: session.url });
});

//EXPORT
module.exports = app;
