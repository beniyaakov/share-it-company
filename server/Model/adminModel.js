const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const AdminModel = Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    type: String,
    default: 'Admin',
  },
});

const adminModel = Mongoose.model('Admins', AdminModel);
module.exports = adminModel;
