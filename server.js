const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = path("path");

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
db.WorkOut.create({ name: "Campus Library" })
  .then((dbWorkOut) => {
    console.log(dbWorkOut);
  })
  .catch(({ message }) => {
    console.log(message);
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

app.get("/books", (req, res) => {
  db.Book.find({})
    .then((dbBook) => {
      res.json(dbBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/WorkOut", (req, res) => {
  db.WorkOut.find({})
    .then((dbWorkOut) => {
      res.json(dbWorkOut);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/populated", (req, res) => {
  db.WorkOut.find({})
    .populate("books")
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
