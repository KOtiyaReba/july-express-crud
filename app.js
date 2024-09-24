// 1. installed express
// 2.Import express
const express = require("express");
require("dotenv").config();
var morgan = require("morgan");
// Import local module
const base_route = require("./Routes/basicRoute");
const sec_route = require("./Routes/seconRoute");

// Initializing express
const app = express();
app.use(morgan("dev"));

// Middleware
// API
app.use("/api", base_route);
app.use("/sec", sec_route);

// port assigning.Server in listening mode
app.listen(process.env.port, () => {
  console.log(`Server is up and running in ${process.env.port}`);
});
