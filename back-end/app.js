const express = require("express");
const cors = require("cors");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
// app.get("/", (req, res) => {
//   res.send(
//     <div>
//       <h1>
//         Welcome to my ecommerce api server! This api server is being used as a
//         practice tool.
//       </h1>
//       <h3>Try this endpoint to view some of our items: /items</h3>
//     </div>
//   );
// });
app.get("/", (req, res) => {
  res.send(
    "<div><h1>Welcome to my ecommerce api server! This api server is being used as a practice tool.</h1> </br> <h3>Try this endpoint: /items</h3></div>"
  );
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

//EXPORT
module.exports = app;
