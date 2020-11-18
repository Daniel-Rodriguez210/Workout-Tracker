const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const { Seeder } = require('mongo-seeding');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", { useNewUrlParser: true });

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('seeders'));

require("./Develop/routes/api-routes")(app);
require("./Develop/routes/html-routes")(app);


app.listen(3000, () => {
    console.log("App running on port 3000!");
});