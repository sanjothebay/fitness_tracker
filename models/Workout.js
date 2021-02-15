const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
  day: { type: Date },
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
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});

const Workout = mongoose.model("Workout", WorkOutSchema);

module.exports = Workout;
