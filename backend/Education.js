const mongoose = require("mongoose");

// Define schema for the courses at different levels
const CourseSchema = new mongoose.Schema({
  name: [String],
  duration: String,
  eligibility: String,
  ageLimit: String,
  fee: String,
  salary: String,
  certificates: [String],
  employmentAreas: [String],
});

// Define schema for the streams at different levels
const StreamSchema = new mongoose.Schema({
  name: String,
  courses: [CourseSchema],
});

// Define schema for the levels (e.g., Class 10, Diploma, Class 12, etc.)
const LevelSchema = new mongoose.Schema({
  level: String,
  streams: [StreamSchema],
});

// Define schema for the main document containing different levels
const MainSchema = new mongoose.Schema({
  class: String,
  levels: [LevelSchema],
});

// Create a model based on the main schema
const Main = mongoose.model("Main", MainSchema);

module.exports = Main;
