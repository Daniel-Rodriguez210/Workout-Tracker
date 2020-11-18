const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


app.listen(3000, () => {
    console.log("App running on port 3000!");
});