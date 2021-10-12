const Jwt = require('jsonwebtoken');

exports.authUser = (req, res, next) => {
  let token = req.header('x-api-key');
  try {
    let decodeToken = Jwt.verify(token, process.env.SECRET);
    req.tokenData = decodeToken;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: 'token invalid or expired' });
  }
};
