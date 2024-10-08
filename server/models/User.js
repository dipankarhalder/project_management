const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['super_admin', 'manager', 'owner', 'employee'],
    required: true
  },
  address: {
    type: String
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
