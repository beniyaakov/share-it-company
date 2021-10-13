const mongoose = require('mongoose');

const GraduateSchema = new mongoose.Schema({
  name: String,
  course: String,
  workAt: String,
  img: String,
  description: String,
});

const GraduateModel = mongoose.model('graduates', GraduateSchema);
module.exports = GraduateModel;
