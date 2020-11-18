const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Exercise Type is Required"
    },

    name: {

        type: String,
        trim: true,
        required: "Name of Exercise is Required"
    },

    duration: {

        type: Number,
        trim: true,
        required: "Duration of Exercise is Required"
    },

    distance: {
        type: Number,
    },

    weight: {
        type: Number,
    },

    reps: {
        type: Number,
    },

    sets: {
        type: Number,
    },

})

const User = mongoose.model("workout", UserSchema);
module.exports = User;