const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { expireTimer } = require('../utils/lib_functions');
const { register, login } = require('../utils/constant_routes');
const {
  existing_user,
  not_an_email,
  something_wrong,
  wrong_password,
  error_msg
} = require('../utils/constant_messages');

const router = express.Router();
const jwt_secret = process.env.JWT_SECRET;

/* User registration */
router.post(register, async (req, res) => {
  const { name, email, phone, password, role } = req.body;

  try {
    /* checking existing user using email */
    let user_exist = await User.findOne({ email });
    if (user_exist) {
      return res.status(400).json({
        code: 400,
        message: `${email} ${existing_user}`
      });
    }

    /* checking existing user using phone */
    let existing_phone = await User.findOne({ phone });
    if (existing_phone) {
      return res.status(400).json({
        code: 400,
        message: `${phone} ${existing_user}`
      });
    }

    /* hashing password brfore store information */
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    /* save new user information */
    const new_user = new User({
      name,
      email,
      phone,
      password: hashed,
      role
    });
    await new_user.save();

    /* generate jwt token */
    const payload = { id: new_user.id, role: new_user.role };
    const token = jwt.sign(payload, jwt_secret, expireTimer);

    return res.status(200).json({
      code: 200,
      data: token
    });
  } catch (err) {
    console.error(`${error_msg} ${err.message}`);
    return res.status(500).json({
      code: 500,
      message: something_wrong
    });
  }
});

/* User login */
router.post(login, async (req, res) => {
  const { email, password } = req.body;

  try {
    /* checking the email is exist or not */
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        code: 400,
        message: `${email} ${not_an_email}`
      });
    }

    /* validating the password */
    const valid_password = await bcrypt.compare(password, user.password);
    if (!valid_password) {
      return res.status(400).json({
        code: 400,
        message: wrong_password
      });
    }

    /* generate jwt token */
    const payload = { id: user.id, role: user.role };
    const token = jwt.sign(payload, jwt_secret, expireTimer);

    return res.status(200).json({
      code: 200,
      data: token
    });
  } catch (err) {
    console.error(`${error_msg} ${err.message}`);
    return res.status(500).json({
      code: 500,
      message: something_wrong
    });
  }
});

module.exports = router;
