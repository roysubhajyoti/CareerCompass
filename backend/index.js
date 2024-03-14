const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Main = require("./Education");
app.use(express.json());
app.use(cors());
const Education = require("./Education");
mongoose.connect("mongodb://127.0.0.1:27017/careerCompass_test");

app.get("/paths", (req, res) => {
  Education.find()
    .then((classes) => res.json(classes))
    .catch((err) => res.json(err));
});

const PORT = process.env.PORT || 3001; // Use port 3001 by default
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
