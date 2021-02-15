const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness_tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

db.Workout.create({ name: "Workout Library" })
  .then((dbWorkout) => {
    console.log(dbWorkout);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("/exercise", (req, res) => {
  db.Workout.find({})
    .then((dbexercise) => {
      res.json(dbexercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/workouts", ({body}, res) => {
  db.Exercise.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put("/Workout/:id", (req, res) => {
  db.Workout.updateOne({})
    .then((dbexercise) => {
      res.json(dbexercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/submit", ({ body }, res) => {
  db.Book.create(body)
    .then(({ _id }) =>
      db.WorkOut.findOneAndUpdate({}, { $push: { books: _id } }, { new: true })
    )
    .then((dbWorkOut) => {
      res.json(dbWorkOut);
    })
    .catch((err) => {
      res.json(err);
    });
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
