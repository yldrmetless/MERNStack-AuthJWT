const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user_routes");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/users", userRoutes);


mongoose
  .connect(process.env.MONGO_DB)
  .then(
    app.listen(process.env.PORT, () => {
      console.log("Server is running and connected to database");
    })
  )
  .catch((err) => {
    console.log("Unable to connect to server and/or MongoDB");
  });
