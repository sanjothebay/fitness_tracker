const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
  day: {
    type: Number,
    trim: true,
    required: "Enter Exercise",
  },
  exercises: [
    { 
    type: {
    type: String,
    trim: true,
    required: "Enter Exercise",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name",
  },
  duration: {
    type: Number,
    trim: true,
    required: "Enter a duration",
  },
  distance: {
    type: Number,
    trim: true,
  },
  weight: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  }}],
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
