const Function = require("../models/function");

const functionsController = {
  Index: (req, res) => {
    Function.find((err, functions) => {
      if (err) {
        res.sendStatus(500);
      }
      res.status(200).json(functions);
    })
  }
};

module.exports = functionsController;