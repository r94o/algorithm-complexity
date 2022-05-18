const express = require("express");
const router = express.Router();

const FunctionsController = require("../controllers/functions");

router.get("/", FunctionsController.Index);

module.exports = router;