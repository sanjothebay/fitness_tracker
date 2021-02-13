const mongoose = require("mongoose");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseWorkOutSchema = new Schema({
  exercisename: {
    type: String,
    trim: true,
    required: "Enter Exercise",
  },
  value: {
    type: Number,
    required: "Enter an amount",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const ExerciseWorkOut = mongoose.model(
  "ExerciseWorkOut",
  exerciseWorkOutSchema
);

module.exports = ExerciseWorkOut;
