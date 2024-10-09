const jwt = require('jsonwebtoken');

const User = require('../models/User');
const {
  invalid_token,
  no_token,
  not_a_user
} = require('../utils/constant_messages');

const jwt_secret = process.env.JWT_SECRET;

// Middleware to verify the token
const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  /* checking token is available or not */
  if (!token) {
    return res.status(401).json({
      code: 401,
      message: no_token
    });
  }

  try {
    const decoded = jwt.verify(token, jwt_secret);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) {
      return res.status(404).json({
        code: 404,
        message: not_a_user
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      code: 401,
      message: invalid_token
    });
  }
};

module.exports = verifyToken;
