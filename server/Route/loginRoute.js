const route = require('express').Router();
const {
  postLogin,
  getUserInfoByToken,
} = require('../Controller/loginController');
const { authUser } = require('../Middleware/isToken');

route.post('/login', postLogin);
route.get('/userInfo', authUser, getUserInfoByToken);

module.exports = route;
