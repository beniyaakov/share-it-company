const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema({
  name: String,
  url: String,
  description: String,
  from: String,
});

const CoursesModel = mongoose.model('courses', CoursesSchema);
module.exports = CoursesModel;
