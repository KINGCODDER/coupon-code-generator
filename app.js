const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const couponRoute = require("./Routes/couponRoute");

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/v1/coupon", couponRoute);

module.exports = app;
