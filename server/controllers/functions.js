const Function = require("../models/function");

const functionsController = {
  Index: (req, res) => {
    Function.find((err, functions) => {
      res.json(functions);
    })
  }
};

module.exports = functionsController;