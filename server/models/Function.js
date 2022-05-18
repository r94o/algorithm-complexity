const mongoose = require("mongoose");

const FunctionSchema = new mongoose.Schema({
  timeArray: [number],
  timestamps: true
});

const Function = mongoose.model("Function", FunctionSchema);

module.exports = Function;