const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  item: { type: String, required: true },
});

module.exports = mongoose.model("Todos", todoSchema);
