const express = require("express");
const logger = require("morgan");
const mongojs = require("mongoose");

const app = express();

app.use(logger("dev"));

app.use(express.static('public'));
app.use(express.static('seeders'));








app.listen(3000, () => {
    console.log("App running on port 3000!");
  });