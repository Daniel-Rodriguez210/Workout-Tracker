const express = require("express");
const logger = require("morgan");
const mongojs = require("mongoose");

const app = express();

app.use(express.static('public'))







app.listen(3000, () => {
    console.log("App running on port 3000!");
  });