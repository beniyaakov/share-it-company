const Jwt = require('jsonwebtoken');

exports.authUser = (req, res, next) => {
  let token = req.header('api-x-key');
  try {
    let decodeToken = Jwt.verify(token, 'SECRET');
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: 'token invalid or expired' });
  }
};
