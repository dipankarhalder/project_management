const express = require('express');

const Company = require('../models/Company');
const verifyToken = require('../middleware/auth');
const verifyRole = require('../middleware/role');
const {
  new_company_create,
  list_companies,
  company_details
} = require('../utils/constant_routes');
const {
  something_wrong,
  error_msg,
  successfully_created
} = require('../utils/constant_messages');

const router = express.Router();

router.post(
  new_company_create,
  verifyToken,
  verifyRole(['super_admin', 'manager']),
  async (req, res) => {
    try {
      const new_company = new Company(req.body);
      await new_company.save();

      return res.status(201).json({
        code: 201,
        data: new_company,
        message: successfully_created
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

router.get(
  list_companies,
  verifyToken,
  verifyRole(['super_admin', 'manager']),
  async (req, res) => {
    try {
      const lists_company = await Company.find();
      return res.status(200).json({
        code: 200,
        data: lists_company
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

router.get(
  company_details,
  verifyToken,
  verifyRole(['super_admin', 'manager']),
  async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    try {
      const get_company = await Company.findById({ _id: id });
      return res.status(200).json({
        code: 200,
        data: get_company
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
