const mongoose = require("mongoose");
const chalk = require("chalk");
const connectDB = async () => {
  try {
    const connec = await mongoose.connect(
      "mongodb://127.0.0.1:27017/sicuAura",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(chalk.bold.yellow("Connected to DB"));
  } catch (e) {
    console.log(chalk.red(e));
  }
};
module.exports = connectDB;
