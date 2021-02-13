const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
//   author: String,
//   title: String
});

const Excercise = mongoose.model("Book", ExcerciseSchema);

module.exports = Excercise;


excercise