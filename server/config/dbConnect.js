const mongoose = require("mongoose");
require("dotenv").config();

// console.log(process.env.MONGO_URL);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to database");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = connectDB;
