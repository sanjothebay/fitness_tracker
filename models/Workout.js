const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
  day: { 
    type: Number, 
    default: Date.now 
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
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkOutSchema);

module.exports = Workout;
