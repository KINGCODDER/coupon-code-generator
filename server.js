const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_LOCAL;
const PORT = process.env.PORT;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB Connection successful");
  });

app.listen(PORT, () => {
  console.log("app is listening on port 3400");
});
