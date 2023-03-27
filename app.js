const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const couponRoute = require("./Routes/couponRoute");
const path = require("path");

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/v1/coupon", couponRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend", "build", "index.html")),
      function (err) {
        if (err) {
          res.status(500).send({
            err,
          });
        }
      };
  });
}

module.exports = app;
