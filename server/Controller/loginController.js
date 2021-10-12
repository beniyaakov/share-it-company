const Joi = require('joi');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
const userModel = require('../Model/userModel');

const validateLogin = (bodyData) => {
  let joiSchema = Joi.object({
    email: Joi.string().min(2).max(100).required().email(),
    password: Joi.string().min(3).max(100).required(),
  });

  return joiSchema.validate(bodyData);
};

const createToken = (userId) => {
  let token = Jwt.sign({ _id: userId }, process.env.SECRET, {
    expiresIn: '60mins',
  });
  return token;
};

const postLogin = async (req, res) => {
  let validBody = validateLogin(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  // נבדוק אם המייל שנשלח בבאדי קיים במסד נתונים
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ msg: 'user not found' });
  }
  // נבדוק אם הסיסמא מתאימה להצפנה שנמצאת במסד נתונים
  let validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(401).json({ msg: 'password not match' });
  }

  let newToken = createToken(user._id);
  res.json({ token: newToken });
};

const getUserInfoByToken = async (req, res) => {
  let user = await userModel.findOne({ _id: req.tokenData._id });
  res.json(user);
};

module.exports = {
  postLogin,
  getUserInfoByToken,
};
