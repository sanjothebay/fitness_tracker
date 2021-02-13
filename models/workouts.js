const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
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

const WorkOut = mongoose.model(
  "WorkOut",
  WorkOutSchema
);

module.exports = WorkOut;


// day: new Date().setDate(new Date().getDate()-10),
// exercises: [
//   {
//     type: "resistance",
//     name: "Bicep Curl",
//     duration: 20,
//     weight: 100,
//     reps: 10,
//     sets: 4
//   }
