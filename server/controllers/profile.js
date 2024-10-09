const express = require('express');

const User = require('../models/User');
const verifyToken = require('../middleware/auth');
const verifyRole = require('../middleware/role');
const { profile, users } = require('../utils/constant_routes');
const {
  something_wrong,
  error_msg,
  not_a_user
} = require('../utils/constant_messages');

const router = express.Router();

/* User profile */
router.get(
  profile,
  verifyToken,
  verifyRole(['super_admin', 'manager', 'owner', 'employee']),
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) {
        return res.status(404).json({
          code: 404,
          message: not_a_user
        });
      }

      const user_info = {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      };
      return res.status(200).json({
        code: 200,
        data: user_info
      });
    } catch (err) {
      console.error(`${error_msg} ${err.message}`);
      return res.status(500).json({
        code: 500,
        message: something_wrong
      });
    }
  }
);

/* find all profiles */
router.get(
  users,
  verifyToken,
  verifyRole(['super_admin']),
  async (req, res) => {
    try {
      const user = await User.find();
      return res.status(200).json({
        code: 200,
        data: user
      });
    } catch (err) {
      console.error(`${error_msg} ${err.message}`);
      return res.status(500).json({
        code: 500,
        message: something_wrong
      });
    }
  }
);

module.exports = router;
