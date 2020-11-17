const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const { Seeder } = require('mongo-seeding');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout", { useNewUrlParser: true });

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('seeders'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);








app.listen(3000, () => {
    console.log("App running on port 3000!");
});