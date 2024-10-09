const { no_user } = require('../utils/constant_messages');

// Middleware to verify the roles
const verifyRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        code: 403,
        msg: no_user
      });
    }
    next();
  };
};

module.exports = verifyRole;
