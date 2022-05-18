const mongoose = require("mongoose");

const FunctionSchema = new mongoose.Schema(
    { 
      functionCode: String,
      timeTakenArray: [Number]
      
    },
    { timestamps: true }
);

const Function = mongoose.model("Function", FunctionSchema);

module.exports = Function;