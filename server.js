const express = require("express");
const logger = require("morgan");
const mongojs = require("mongoose");
const { Seeder } = require('mongo-seeding');





const app = express();

app.use(logger("dev"));

app.use(express.static('public'));
app.use(express.static('seeders'));


require("./Develop/routes/html-routes")(app);








app.listen(3000, () => {
    console.log("App running on port 3000!");
});