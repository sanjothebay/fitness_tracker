const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
   resistance: String,
   cardio: String,
});

const Excercise = mongoose.model("Excercise", ExcerciseSchema);

module.exports = Excercise;