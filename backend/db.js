const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()

const DB_URI = process.env.MONGO_URI;

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log("Connected to the db")
  } catch (err) {
    console.log({ message: err.message });
  }
};

module.exports = connectToDB;
