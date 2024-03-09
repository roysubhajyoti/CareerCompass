const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const Education = require("./Education");
mongoose.connect(
  "mongodb+srv://royknight272:Radhekrishna51@cluster0.tj7olde.mongodb.net/Career_Compass_test"
);

app.get("/paths", (req, res) => {
  Education.find()
    .then((classes) => res.json(classes))
    .catch((err) => res.json(err));
});

app.listen(3001);
