const express = require("express");
var cors = require("cors");
const chalk = require("chalk");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRouter");
//_____________________________________________________
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/",userRoutes)
app.use((req, res) => {
  res.status(404).send("<h1>sorry! Page not found on the server <h1/>");
});
//_____________________________________________________
app.listen(
  process.env.PORT,
  console.log(chalk.blue.bold("PORT is running on " + process.env.PORT))
);
