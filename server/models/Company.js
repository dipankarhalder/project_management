const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  company_info: {
    name: {
      type: String,
      unique: true,
      required: true
    },
    industry: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zipCode: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      }
    }
  },
  company_contacts: {
    phone: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    website: {
      type: String,
      require: true
    }
  }
});

const Company = mongoose.model('Company', CompanySchema);
module.exports = Company;
